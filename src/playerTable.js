import React, { useState } from 'react'

export default function playerTable({ players , deleteAction, addAction, position }) {
    const [name,setName] = useState('');

    function addPlayer(){
        event.preventDefault();
        setName('');
        addAction(name,position);
    }

    return (
        <form className="playertable" onSubmit={()=>addPlayer()}>
            <div className="positionHeader center">
                <p>{position}</p>
            </div>
            <table>
                <tbody>
                    {
                        players && players.length > 0 ?
                            players.map((player,index)=>{
                                return(
                                    <tr key={index} >
                                        <td className="playerName">
                                            <span>{player}</span>
                                        </td>
                                        <td onClick={()=> deleteAction(player,position)} className="deleteButton"> 
                                            <span>Delete </span>
                                        </td>
                                    </tr>
                                )
                            }) 
                        : 
                        <tr className="noPlayers center">
                            <td>No {position} added</td>
                        </tr>
                    }
                </tbody>
            </table>
            <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Add Player"></input>
            <button onClick={()=> addPlayer()}>Add</button>
        </form>
    )
}
