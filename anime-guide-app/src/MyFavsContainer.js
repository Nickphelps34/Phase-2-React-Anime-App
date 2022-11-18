import React from 'react';
import MyFavsCard from './MyFavsCard';

function MyFavsContainer({myFavs, removeFavorites}) {
    return (
        <div className="fav-animes-page">
            <div>
                {myFavs.map(myAnime =><MyFavsCard key={myAnime.id} myAnime={myAnime} removeFavorites={removeFavorites}/>)}
            </div>
        </div>
    );
}

export default MyFavsContainer;