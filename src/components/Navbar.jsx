import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">AllPlayers</Link>
            <br></br>
            <br></br>
            <Link to="/addNew">Add New Player</Link>
        </nav>
    );
}