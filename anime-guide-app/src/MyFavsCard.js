import React, {useState} from "react";

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

const CardBack = ({anime, setMyFavs, myFavs}) => {

const [removeAnime, setRemoveAnime] = useState(false)

const handleToggle = () => {
    setRemoveAnime(!removeAnime)
    setMyFavs([anime,...myFavs ])
}

const [rating, setRating] = useState('');

const handleRating = (event) => {
    setRating(event.target.value);
}

    return(
        <div className="flip-card-back">
            <hr/>
            <h2 className="title-font">{anime.title.toUpperCase()}</h2>
            <hr/>
            <h4>Genre: {anime.genre}</h4>
            <input type="number" min="1" max="10" name="rating" onChange={handleRating} value={rating}/>
            <p>My Rating : {rating}/10 </p>
            <button onClick={handleToggle} className="card-button">- Remove From My Favorites</button>
        </div>
    )
}

function MyFavsCard({anime, setMyFavs, myFavs}) {

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                    <CardFront anime={anime}/>
                    <CardBack setMyFavs={setMyFavs} myFavs={myFavs} anime={anime}/>
            </div>
        </div>
    );
}

export default MyFavsCard