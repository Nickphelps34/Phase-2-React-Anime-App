import React, { useState } from "react";

const CardFront = (anime) => {
    return (
        <div className="flip-card-front">
            <img className="square-img" src={anime.imageURL} alt={anime.description} />
        </div>
    )
}

const CardBack = (anime, removeFavorites) => {
    
    const [rating, setRating] = useState('');

    const handleRating = (event) => {
    setRating(event.target.value);
    }

    const API = "http://localhost:8001/myAnime"
    const headers = {

        Accepts: "application/json", 
        "Content-Type" : "application/json"}

    function handleDelete(id){
        removeFavorites(id)
        fetch(`${API}/${id}`,{
            method: "DELETE",
            headers,
        })

    }


    return (
        <div className="flip-card-back">
            <hr />
            <h2 className="title-font">{anime.title.toUpperCase()}</h2>
            <hr />
            <input type="number" min="1" max="10" name="rating" onChange={handleRating} value={rating}/>
            <p>My Rating : {rating}/10 </p>
            <p>Personal Notes: {anime.notes}</p>
            <h4>Genre: {anime.genre}</h4>

            <button onClick={()=>handleDelete(anime.id)}>- Remove From Favorites</button>
        </div>
    )
}


function MyFavsCard({ myAnime, removeFavorites }) {
    return (
        myAnime === undefined ?  "" :
            <div className="flip-card">
                <div className="flip-card-inner">
                    {CardFront(myAnime)}
                    {CardBack(myAnime, removeFavorites)}
                </div>
            </div>
    );
}

export default MyFavsCard