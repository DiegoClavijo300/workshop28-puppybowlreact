import React from "react";
import { useNavigate } from "react-router-dom";
import "./PlayerCard.css";
import { getPlayerById } from "../../API";

export default function PlayerCard({ player, component }) {
  //console.log(player);
  const { name, breed, imageURL, id, team } = player;
  const navigate = useNavigate();
  return (
    <div className="player-card-container">
      <h2>{name}</h2>
      <img src={imageURL} alt={`${name}`} />
      <h3>{breed}</h3>
      {team && <h3>{team?.name}</h3>}
      {component !== "detail" && (
        <button onClick={()=> navigate(`/players/${id}`)}>See Details</button>
      )}
    </div>
  );
}