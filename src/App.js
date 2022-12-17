import React, { useState } from "react";
import "./App.css";
import { random } from "./utils";
import Players from "./players";
import Squad from "./squad";
import { playerPosition } from "./constants";

export default function App() {
  const [keepers, setKeepers] = useState([]);
  const [batsmen, setBatsmen] = useState([]);
  const [allRounders, setAllRounders] = useState([]);
  const [bowlers, setBowlers] = useState([]);
  const [keeperLimit, setKeeperLimit] = useState(1);
  const [batsmenLimit, setBatsmenLimit] = useState(3);
  const [allRoundersLimit, setAllRoundersLimit] = useState(4);
  const [bowlersLimit, setBowlersLimit] = useState(3);
  const [squadKeepers, setSquadKeepers] = useState([]);
  const [squadBatsmen, setSquadBatsmen] = useState([]);
  const [squadAllRounders, setSquadAllRounders] = useState([]);
  const [squadBowlers, setSquadBowlers] = useState([]);
  const squadLengthPerMatch = 22;

  const [generateBoxClicked, setGenerateBoxClicked] = useState(false);

  const [formation, setFormation] = useState("1-3-4-3");

  var players = {
    keepers,
    keeperLimit,
    batsmen,
    batsmenLimit,
    allRounders,
    allRoundersLimit,
    bowlers,
    bowlersLimit,
    addAction,
    deleteAction,
  };
  var squadPlayers = {
    squadKeepers,
    squadBatsmen,
    squadAllRounders,
    squadBowlers,
  };

  function isEnoughSquad() {
    let allPlayers = [...keepers, ...batsmen, ...allRounders, ...bowlers] || [];
    return allPlayers.length === squadLengthPerMatch;
  }

  function formationOnChange(e) {
    let chosenFormation = e.target.value.split("-");
    setKeeperLimit(chosenFormation[0]);
    setBatsmenLimit(chosenFormation[1]);
    setAllRoundersLimit(chosenFormation[2]);
    setBowlersLimit(chosenFormation[3]);
    setFormation(e.target.value);
  }

  function addAction(player, position) {
    switch (position) {
      case playerPosition.keeper:
        setKeepers([...keepers, player]);
        return;
      case playerPosition.bat:
        setBatsmen([...batsmen, player]);
        return;
      case playerPosition.all:
        setAllRounders([...allRounders, player]);
        return;
      case playerPosition.bowl:
        setBowlers([...bowlers, player]);
        return;
      default:
        return;
    }
  }

  function deleteAction(player, position) {
    switch (position) {
      case playerPosition.keeper:
        setKeepers(keepers.filter((name) => name !== player));
        return;
      case playerPosition.bat:
        setBatsmen(batsmen.filter((name) => name !== player));
        return;
      case playerPosition.all:
        setAllRounders(allRounders.filter((name) => name !== player));
        return;
      case playerPosition.bowl:
        setBowlers(bowlers.filter((name) => name !== player));
        return;
      default:
        return;
    }
  }

  function generateSquad() {
    setSquadKeepers(random(keepers, keeperLimit));
    setSquadBatsmen(random(batsmen, batsmenLimit));
    setSquadAllRounders(random(allRounders, allRoundersLimit));
    setSquadBowlers(random(bowlers, bowlersLimit));
    setGenerateBoxClicked(true);
  }

  return (
    <div>
      <div className="header center">Dream Team Generator</div>
      <div className="playerList">
        <Players players={players} />
      </div>
      <div className="formationDiv">
        <span>Formation : </span>
        <select
          name="formation"
          id="formation"
          value={formation}
          onChange={(e) => formationOnChange(e)}
        >
          <option value="1-3-4-3">1-3-4-3</option>
          <option value="1-4-3-3">1-4-3-3</option>
          <option value="1-4-2-4">1-4-2-4</option>
          <option value="1-5-2-3">1-5-2-3</option>
          <option value="1-3-3-4">1-3-3-4</option>
          <option value="2-3-3-3">2-3-3-3</option>
          <option value="2-4-2-3">2-4-2-3</option>
          <option value="1-5-1-4">1-5-1-4</option>
        </select>
      </div>
      {isEnoughSquad() ? (
        <button className="generateTeam" onClick={() => generateSquad()}>
          Generate Dream Squad
        </button>
      ) : (
        <button className="generateTeamInvisible" disabled>
          Generate Dream Squad
        </button>
      )}
      {generateBoxClicked && <Squad squadPlayers={squadPlayers} />}
    </div>
  );
}
