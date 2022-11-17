import React, { useState } from "react";

const CardFront = (anime) => {
    return (
        <div className="flip-card-front">
            <hr />
            <h2 className="title-font">{anime.title.toUpperCase()}</h2>
            <hr />
            <img className="square-img" src={anime.imageURL} alt={anime.description} />
        </div>
    )
}

const CardBack = (anime) => {
    return (
        <div className="flip-card-back">
            <hr />
            <h2 className="title-font">{anime.title.toUpperCase()}</h2>
            <hr />
            <h4>Genre: {anime.genre}</h4>
        </div>
    )
}


function MyFavsCard({ myAnime }) {
    return (
        myAnime === undefined ?  null :
            <div className="flip-card">
                <div className="flip-card-inner">
                    {CardFront(myAnime)}
                    {CardBack(myAnime)}
                </div>
            </div>
    );
}

export default MyFavsCard