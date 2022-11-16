import React from 'react';
import AnimeCards from "./AnimeCards"
function AnimeContainer({animeData,myFavs,setMyFavs}) {
    return (
        <div className='anime-container'>
            {animeData.map(anime=> <AnimeCards setMyFavs={setMyFavs} myFavs={myFavs} key={anime.id} anime={anime}/>)}
        </div>
    );
}
export default AnimeContainer;