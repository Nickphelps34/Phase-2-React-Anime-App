import React, {useState} from 'react';
function AnimePage({anime}) {
    const [toggle, setToggle] =useState(true)
function handleToggle(e){
    setToggle(!toggle)
}
    console.log(anime)
    return (
        <div className="Anime-Card">
            <div className="Container">
            <img className="Image"src={anime.imageURL} alt={anime.description} onClick={handleToggle}/>
            <ul>{anime.title}</ul>
            <ul>Production Studio{anime.productionStudio}</ul>
            <ul>Series aired {anime.startDate} to {anime.endDate}</ul>
            <ul>Total Seasons{anime.numberOfSeasons}</ul>
            <ul>No of Episodes{anime.numbeOfEpisodes}</ul>
            <ul>IMDB Rating{anime.imbdRating}</ul>
            <ul>Genre {anime.genre}</ul>
            <ul>User Ratng {anime.personalUserRating}</ul>
            <button></button>
            </div>
        </div>
    );
}
export default AnimePage;