import React from 'react'

export default function squad({ squadPlayers }) {
    let { squadKeepers,squadBatsmen,squadAllRounders,squadBowlers } = squadPlayers;
    return (
        <div className="squad">
            <p className="positionName">Wicket-Keeper</p>
            <div className="positionPlayers">
                {squadKeepers.map((keeper,index)=>{
                    return(
                        <div key={index} className="playerBox center">
                            {keeper}
                        </div>
                    )
                })}
            </div>

            <p className="positionName">Batsmen</p>
            <div className="positionPlayers">
                {squadBatsmen.map((batsmen,index)=>{
                    return(
                        <div key={index} className="playerBox center">
                            {batsmen}
                        </div>
                    )
                })}
            </div>

            <p className="positionName">All-Rounders</p>
            <div className="positionPlayers">
                {squadAllRounders.map((allRounder,index)=>{
                    return(
                        <div key={index} className="playerBox center">
                            {allRounder}
                        </div>
                    )
                })}
            </div>

            <p className="positionName">Bowlers</p>
            <div className="positionPlayers">
                {squadBowlers.map((bowler,index)=>{
                    return(
                        <div key={index} className="playerBox center">
                            {bowler}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
