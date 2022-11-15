import React, {useState} from 'react';

const CardFront = ({anime}) => {
    return(
        <div className="card-front">
            <h2>{anime.title}</h2>
            <img className="square-img"src={anime.imageURL} alt={anime.description}/>
        </div>
    )
}

const Details=({anime}) => <h2>{anime.genre}</h2>

function AnimePage({anime}) {

    const [showDetails, setShowDetails] = useState(true)
const toggleDetails = () => {
    setShowDetails(!showDetails)
}

    return (
        <div className="Anime-Card" onClick={toggleDetails}>
            <div className="card-front">
                <h2>{anime.title.toUpperCase()}</h2>
                <img className="square-img"src={anime.imageURL} alt={anime.description}/>
            </div>
            {/* <div className="card-back">
                <ul>{anime.title}</ul>
                <ul>Production Studio{anime.productionStudio}</ul>
                <ul>Series aired {anime.startDate} to {anime.endDate}</ul>
                <ul>Total Seasons{anime.numberOfSeasons}</ul>
                <ul>No of Episodes{anime.numbeOfEpisodes}</ul>
                <ul>IMDB Rating{anime.imbdRating}</ul>
                <ul>Genre {anime.genre}</ul>
                <ul>User Ratng {anime.personalUserRating}</ul>
                <button></button>
            </div> */}
        </div>
    );
}
export default AnimePage;



