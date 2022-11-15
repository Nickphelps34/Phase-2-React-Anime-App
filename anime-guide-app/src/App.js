import React, {useState, useEffect} from "react"
import AnimeContainer from "./AnimeContainer"

const API = "http://localhost:3000/animes"

function App() {

  const [animeData, setAnimeData] = useState([])

  useEffect(() =>{
    fetch(API)
    .then(response => response.json())
    .then(console.log)
  },[]);
  
  // create search/filter function to return all results to the container

  const filteredAnimeData = animeData.filter((eachAnimeObj) => {
    return(
      eachAnimeObj.title
    )
  })

  return (
    <div>
      <AnimeContainer thing={filteredAnimeData}/>
    </div>
  );
}

export default App;