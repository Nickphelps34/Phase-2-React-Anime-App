import React from 'react';
import MyFavsCard from './MyFavsCard';

function MyFavsContainer({myFavs, removeFavorites}) {
    return (
        <div>
            {myFavs.map(myAnime =><MyFavsCard key={myAnime.id} myAnime={myAnime} removeFavorites={removeFavorites}/>)}
        </div>
    );
}

export default MyFavsContainer;