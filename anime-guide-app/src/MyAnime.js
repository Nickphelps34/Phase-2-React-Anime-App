import React from "react";
import AnimeCards from "./AnimeCards";

function MyAnime({myFavs,setMyFavs}){

    return(
        <div className="myFavsCards">
            {myFavs.map((anime) => <AnimeCards setMyFavs={setMyFavs} myFavs={myFavs} key={anime.id} anime={anime}/>)}
        </div>
    )
}

export default MyAnime