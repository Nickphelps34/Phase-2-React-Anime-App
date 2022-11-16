import React from "react";
import {NavLink} from "react-router-dom";

function NavBar (){
    return(
        <nav className="nav">
            <ul>
                <li>
                    <NavLink exact to="/"> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/recommendations">Recommendations</NavLink>
                </li>
                <li>
                    <NavLink to="/myanimes">My Animes</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar