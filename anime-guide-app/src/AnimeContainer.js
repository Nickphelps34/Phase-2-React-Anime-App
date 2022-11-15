import React from 'react';
import AnimeCards from "./AnimeCards"
function AnimeContainer({animeData}) {
    return (
        <div className='anime-container'>
            {animeData.map(anime => <AnimeCards key={anime.id} anime={anime}/>)}
        </div>
    );
}
export default AnimeContainer;