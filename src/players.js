import React from 'react'
import PlayerTable from './playerTable';
import { playerPosition } from './constants';

export default function players({ players }) {
    let { keepers,batsmen,allRounders,bowlers,addAction,deleteAction } = players;
    return (
        <div className="listPlayers">
            <PlayerTable position={playerPosition.keeper} players={keepers} addAction={addAction} deleteAction={deleteAction}/>
            <PlayerTable position={playerPosition.bat} players={batsmen} addAction={addAction} deleteAction={deleteAction}/>
            <PlayerTable position={playerPosition.all} players={allRounders} addAction={addAction} deleteAction={deleteAction}/>
            <PlayerTable position={playerPosition.bowl} players={bowlers} addAction={addAction} deleteAction={deleteAction}/>
        </div>
    )
}
