import React from 'react';
import AnimeCards from "./AnimeCards"

function AnimeContainer({animeData,myFavs,setMyFavs}) {

    return (
        <div>
            <h1 className='home-title'>Top 20 Animes of All Time</h1>
            <div className='anime-container'>
                {animeData.map((anime)=> <AnimeCards setMyFavs={setMyFavs} myFavs={myFavs} key={anime.id} anime={anime}/>)}
            </div>
        </div>
    );

}

export default AnimeContainer;