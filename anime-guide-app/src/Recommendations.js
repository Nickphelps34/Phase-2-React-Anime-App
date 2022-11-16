import React from "react";

function Recommendation({animeData}){
// state here
  let filteredAnime = animeData.filter(anime=>anime.genre === "This value depends on the dropdown selected item")
  console.log(filteredAnime)
  return( 
    <div>
      {/* 
      
      dropdown
        onchange modify a state that filters the animeData
      
      */}
      <h1>Hello Friends</h1>
      {/* 
      
        filtered data map
      
      */}
    </div>
  )}

export default Recommendation