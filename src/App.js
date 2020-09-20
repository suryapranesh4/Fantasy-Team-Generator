import React, { useState, useEffect } from 'react';
import './App.css';
import { random } from './utils';
import Players from './players';
import Squad from './squad';
import { playerPosition } from './constants';

export default function App() {
  const [keepers,setKeepers] = useState([]);
  const [batsmen,setBatsmen] = useState([]);
  const [allRounders,setAllRounders] = useState([]);
  const [bowlers,setBowlers] = useState([]);
  // const [keeperLimit,setKeeperLimit] = useState(1);
  // const [batsmenLimit,setBatsmenLimit] = useState(3);
  // const [allRoundersLimit,setAllRoundersLimit] = useState(3);
  // const [bowlersLimit,setBowlersLimit] = useState(4);
  const keeperLimit = 1;
  const batsmenLimit = 3;
  const allRoundersLimit = 3;
  const bowlersLimit = 4;
  const [squadKeepers,setSquadKeepers] = useState([]);
  const [squadBatsmen,setSquadBatsmen] = useState([]);
  const [squadAllRounders,setSquadAllRounders] = useState([]);
  const [squadBowlers,setSquadBowlers] = useState([]);

  const [generateButtonVisible,setGenerateButtonVisible] = useState(false);
  const [generateBoxClicked,setGenerateBoxClicked] = useState(false);

  // const [formation,setFormation] = useState('');
  // const [formationList,setFormationList] = useState([
    //   ''
  // ])

  var players = { keepers,keeperLimit,batsmen,batsmenLimit,allRounders,allRoundersLimit,bowlers,bowlersLimit,addAction,deleteAction };
  var squadPlayers = { squadKeepers,squadBatsmen,squadAllRounders,squadBowlers };

  useEffect(()=>{
    keepers && keepers.length >= 1 && 
    batsmen && batsmen.length >= 3 && 
    allRounders && allRounders.length >=3 &&
    bowlers && bowlers.length >= 4 &&
    setGenerateButtonVisible(true);
  })

  function addAction(player,position){
    switch(position){
      case playerPosition.keeper:
        setKeepers([...keepers,player]);
        return;
      case playerPosition.bat:
        setBatsmen([...batsmen,player]);
        return;
      case playerPosition.all:
        setAllRounders([...allRounders,player]);
        return;
      case playerPosition.bowl:
        setBowlers([...bowlers,player]);
        return;
      default:
        return;
    }
  }

  function deleteAction(player,position){
    switch(position){
      case playerPosition.keeper:
        setKeepers(keepers.filter(name => name!== player));
        return;
      case playerPosition.batsmen:
        setBatsmen(batsmen.filter(name => name!== player));
        return;
      case playerPosition.all:
        setAllRounders(allRounders.filter(name => name!== player));
        return;
      case playerPosition.bowl:
        setBowlers(bowlers.filter(name => name!== player));
        return;
      default:
        return;
    }
  }

  function generateSquad(){
    setSquadKeepers(random(keepers,keeperLimit));
    setSquadBatsmen(random(batsmen,batsmenLimit));
    setSquadAllRounders(random(allRounders,allRoundersLimit));
    setSquadBowlers(random(bowlers,bowlersLimit));
    setGenerateBoxClicked(true);
  }

  return (
    <div>
      <div className="header center">
        Dream Team Generator
      </div>
      <div className="playerList">
        <Players players={players} />
      </div>
      {/* <select name="formation" id="formation">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select> */}
      {
        generateButtonVisible ? 
        <button className="generateTeam" onClick={()=> generateSquad()}>Generate Dream Squad</button>
        :<button className="generateTeamInvisible" disabled>Generate Dream Squad</button>
      }
      {generateBoxClicked && <Squad squadPlayers={squadPlayers}/>}
    </div>
  )
};