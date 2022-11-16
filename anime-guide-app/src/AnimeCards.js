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

const CardBack = ({anime,setMyFavs,myFavs}) => {

const[addAnime, setAddAnime] = useState(true)

const handleToggle = () => {
    setAddAnime(!addAnime)
    // adding current anime to fav list
    setMyFavs([anime,...myFavs ])
}

    return(
        <div className="flip-card-back">
            <hr/>
            <h2 className="title-font">{anime.title.toUpperCase()}</h2>
            <hr/>
            <h4>Genre: {anime.genre}</h4>
            <p>{anime.description}</p>
            <p>IMDB Rating : {anime.imbdRating}</p>
            <button onClick={handleToggle} className="card-button">{addAnime ? '+ Add Anime' : '- Remove Anime' }</button>
        </div>
    )
}

function AnimeCard({anime,setMyFavs, myFavs}) {

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                    <CardFront anime={anime}/>
                    <CardBack setMyFavs={setMyFavs} myFavs={myFavs} anime={anime}/>
            </div>
        </div>
    );
}
export default AnimeCard;



