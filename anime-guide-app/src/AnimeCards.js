import React, {useState} from 'react';


const CardFront = ({anime}) => {
    return(
        <div className="flip-card-front">
            <hr/>
            <h2 className="title-font">{anime.title.toUpperCase()}</h2>
            <hr/>
            <img className="square-img"src={anime.imageURL} alt={anime.description}/>
        </div>
    )
}

const CardBack = ({anime}) => {
    return(
        <div className="flip-card-back">
            <hr/>
            <h2 className="title-font">{anime.title.toUpperCase()}</h2>
            <hr/>
            <h4>Genre: {anime.genre}</h4>
            <p>{anime.description}</p>
            <p>IMDB Rating : {anime.imbdRating}</p>
            <button className="card-button">+ Add Anime</button>
        </div>
    )
}

function AnimeCard({anime}) {

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                    <CardFront anime={anime}/>
                    <CardBack anime={anime}/>
            </div>
        </div>
    );
}
export default AnimeCard;



