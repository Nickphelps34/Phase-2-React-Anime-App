import React from "react";

function Recommendation({animeData}){

const options = [
  
]


// state here
  let filteredAnime = animeData.filter(anime=>anime.genre === "This value depends on the dropdown selected item")
  console.log(filteredAnime)
  return( 
    <div>
      

      {/* 
    
      dropdown
        onchange modify a state that filters the animeData
      
      */}
      <h1 className="recommendation-title">Recommendations</h1>
      {/* 
      
        filtered data map
      
      */}
    </div>
  )}

export default Recommendation