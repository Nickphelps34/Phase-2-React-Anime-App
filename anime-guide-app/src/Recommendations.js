import React, {useState} from "react";
import AnimeCard from "./AnimeCards";


function Recommendation({animeData}){

const [selectedGenre, setSelectedGenre] = useState("")

function changeFilter (event) {
    setSelectedGenre(event.target.value)
}

function filteredAnimes(){
  if (selectedGenre === "")
    return animeData.filter((anime)=>anime.genre === selectedGenre)
  else  
    return animeData.filter((anime)=>anime.genre === selectedGenre)
}


  return( 
    <div>
      <h1 className='recommendation-title'>Recommendations</h1>
    <div className='genre-container'>
      <div className='genre-filter'>
        <select name="filter" onChange={changeFilter}>
          <option value="">Watch by Genre</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
        </select>
       </div>
       <div>
        <h1>{selectedGenre}</h1>
       </div>
       <div className='anime-container'>
        {filteredAnimes().map((anime)=>(
          <AnimeCard key={anime.id} anime={anime}/>
        ))}

       </div>
      </div>
   </div>

  )}
  

export default Recommendation