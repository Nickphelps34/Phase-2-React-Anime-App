import React from "react";

const CardFront = ({anime}) => {

    return(
        <div className="flip-card-front">
            <img className="square-img"src={anime.imageURL} alt={anime.description}/>
        </div>
    )
}


const CardBack = ({anime}) => {

    const totalEpisodes = anime.numberOfEpisodes
    
    let levelOfCommitment
        if (totalEpisodes <= 12){
            levelOfCommitment = 'Low'
        }else if (totalEpisodes >= 13 && totalEpisodes <= 100){
            levelOfCommitment =  'Medium'
        }else if(totalEpisodes > 101){
            levelOfCommitment =  'High'
        }

    return(
        <div className="flip-card-back">
            <hr/>
            <h2 className="title-font">{anime.title.toUpperCase()}</h2>
            <hr/>
            <p>{anime.description}</p>
            <p>Level Of Commitment: </p>
            <div>
                <h3 className="title-font">{levelOfCommitment}</h3>
                <p>{totalEpisodes} Episodes</p>
            </div>
        </div>
    )
}

function RecommendationCards({anime, setMyFavs, myFavs}) {

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                    <CardFront anime={anime}/>
                    <CardBack setMyFavs={setMyFavs} myFavs={myFavs} anime={anime}/>
            </div>
        </div>
    );
}
export default RecommendationCards;





