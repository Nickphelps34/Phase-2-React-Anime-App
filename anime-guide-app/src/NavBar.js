import React from "react";

function NavBar (){
    return(
        <nav className="nav">
            <a href="/" className="site-title"> Home </a>
            <ul>
                <li>
                    <a href="/recommendations">Recommendations</a>
                </li>
                <li>
                    <a href="/myanimes">My Animes</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar