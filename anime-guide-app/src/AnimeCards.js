import React, {useState} from 'react';

const CardFront = ({anime}) => {

    return(
        <div className="flip-card-front">
            <img className="square-img"src={anime.imageURL} alt={anime.description}/>
        </div>
    )
}

const CardBack = ({anime, setMyFavs, myFavs}) => {

const[addAnime, setAddAnime] = useState(true)

const handleToggle = () => {
    setAddAnime(!addAnime)
    // adding current anime to fav list
    setMyFavs([anime,...myFavs ])
}

// "endDate": "December 23, 2008",

    return(
        <div className="flip-card-back">
            <hr/>
            <h2 className="title-font">{anime.title.toUpperCase()}</h2>
            <hr/>
            <div className="card-font">
                <p>Production Studio: {anime.productionStudio}</p>
                <p>Show Start Date: {anime.startDate}</p>
                <p>Show End Date: {anime.endDate}</p>
            </div>
            <button onClick={handleToggle} className="card-button">{addAnime ? '+ My Favorite Animes' : 'Anime Favorited' }</button>
        </div>
    )
}

function AnimeCard({anime, setMyFavs, myFavs}) {

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



