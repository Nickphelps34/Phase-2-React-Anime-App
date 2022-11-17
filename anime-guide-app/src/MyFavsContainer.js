import React from 'react';
import MyFavsCard from './MyFavsCard';

function MyFavsContainer({myFavs}) {
    return (
        <div>
            {myFavs.map(myAnime =><MyFavsCard key={myAnime.id} myAnime={myAnime}/>)}
        </div>
    );
}

export default MyFavsContainer;