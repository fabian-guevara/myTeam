import React, { useState, } from "react";
import { data, } from "./data";
import "./App.css";


const PlayerCard = () => { 
    const [team , setTeam] = useState(data);
    const removePlayer = (id) => { setTeam(team.filter(player => player.id !== id)) };
  return (
    <>
        <div className="wrapper">
            <h1 className="title">My team</h1>
            {
                team.map((player) => {
                    const { name, club, age, id, } = player;   
                    return <div key={id} className="card">
                    <h3>{ name }</h3>
                    <p> { club }</p>
                    <p> { age }</p>
                    <button className="discard-btn" onClick={() => removePlayer(id)}>Discard</button>
                    </div>    
                })
            }
        <button className="discardAll-btn" onClick={() => setTeam([])}>Clear Team</button>
        </div>
    </>
  );
};


export default PlayerCard;