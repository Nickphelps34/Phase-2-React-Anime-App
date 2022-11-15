import React, {useState} from 'react';

  

const CardFront = ({anime}) => {
    return(
        <div className="flip-card-front">
            <h2 className="title-font">{anime.title.toUpperCase()}</h2>
            <img className="square-img"src={anime.imageURL} alt={anime.description}/>
        </div>
    )
}

const CardBack = ({anime}) => {
    return(
        <div className="flip-card-back">
            <h2 className="title-font" >{anime.title.toUpperCase()}</h2>
            <h2>{anime.genre}</h2>
            <p>{anime.description}</p>
            <p>IMDB Rating : {anime.imbdRating}</p>
            <button>Add Anime</button>
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



