import React, {useState} from "react";
import RecommendationCards from "./RecommendationCards";


function Recommendation({animeData}){

const [selectedGenre, setSelectedGenre] = useState("")

function changeFilter (event) {
    setSelectedGenre(event.target.value)
}

function filteredAnimes(){

  if (selectedGenre === null ){
    return ""
  }else{  
    return animeData.filter((anime)=>anime.genre === selectedGenre)
  }
}

  return( 
    <div>
      <div>
        <h1 className='recommendation-title'>Recommendations</h1>
        <hr className='hr'/>
      </div>
        <div className='genre-container'>
        <div className='recommendations-container'> 
        <text className="title-font">{filteredAnimes}</text>
          <div className='genre-filter'>
            <select name="filter" onChange={changeFilter}className="genre-menu">
              <option value="Genre">Genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Horror">Horror</option>
            </select>
           </div>
            { filteredAnimes().map((anime) => ( <RecommendationCards key={anime.id} anime={anime}/> ))}
       </div>
      </div>
   </div>

  )}
  

export default Recommendation