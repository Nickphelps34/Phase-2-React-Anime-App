import React, { useState } from "react";

const CardFront = (anime) => {
    return (
        <div className="flip-card-front">
            <img className="square-img" src={anime.imageURL} alt={anime.description} />
        </div>
    )
}


const CardBack = (anime) => {
    const [rating, setRating] = useState('');

    const handleRating = (event) => {
    setRating(event.target.value);
    }


    return (
        <div className="flip-card-back">
            <hr />
            <h2 className="title-font">{anime.title.toUpperCase()}</h2>
            <hr />
            <h4>Genre: {anime.genre}</h4>
            <input type="number" min="1" max="10" name="rating" onChange={handleRating} value={rating}/>
            <p>My Rating : {rating}/10 </p>
            <p>Personal Notes {anime.notes}</p>
            <button>- Remove From Favorites</button>
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