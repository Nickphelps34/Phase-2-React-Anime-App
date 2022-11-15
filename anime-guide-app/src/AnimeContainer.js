import React from 'react';
import AnimeCards from "./AnimeCards"
function AnimeContainer({animeData}) {
    return (
        <div>
            <h1>
            {animeData.map(anime => <AnimeCards key={anime.id} anime={anime}/>)}
            </h1>
        </div>
    );
}
export default AnimeContainer;