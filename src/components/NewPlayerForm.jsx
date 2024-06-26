import React, { useState } from "react";
import { createPlayer } from "../API/index";
import { useNavigate } from "react-router-dom";
import "./NewPlayerForm.css";

export default function NewPlayerForm() {
    const navigate = useNavigate();
    const [puppyName, setPuppyName] = useState("");
    const [breed, setBreed] = useState("");
    const [playerStatus, setPlayerStatus] = useState("bench");
    const [imageURL, setImageURL] = useState("https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png");

    async function handleSubmit(e) {
        e.preventDefault(); 
        try {
            const player = await createPlayer({
                name: puppyName,
                breed,
                status: playerStatus,
                imageURL,
            });
            if(player.success){
                alert("Your pup has joined the game!");
                navigate("/");
            } else{
                alert("Oops, something went wrong with joining the game. Please try again.");
            }
        }catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Add Player</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" onChange={(e)=> setPuppyName(e.target.value)}></input>
                </label>
                <label>
                    Breed:
                    <input type="text" onChange={(e)=>setBreed(e.target.value)}></input>
                </label>
                <label>
                    Image:
                    <input type="text" onChange={(e) => setImageURL(e.target.value)} />
                </label>
                <label>
                    Status: 
                    <select onChange={(e) => setPlayerStatus (e.target.value)}>
                        <option value="field">Field</option>
                        <option selected value="bench">Bench</option>
                    </select>
                </label>
                <button style={{ width: "25%", margin: "0 auto"}}>Add Player</button>
            </form>
        </div>
    )
}