import React from "react";
import {NavLink} from "react-router-dom";

function NavBar (){
    return(
        <nav className="nav">
            <h1 className="title-font">Choose Your Anime Adventure</h1>
            <ul className="ulNav">
                <li>
                    <NavLink exact to="/"> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/recommendations">Recommendations</NavLink>
                </li>
                <li>
                    <NavLink to="/myanimes">My Favorite Animes</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar