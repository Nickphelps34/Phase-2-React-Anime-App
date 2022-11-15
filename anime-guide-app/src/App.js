import React, {useState, useEffect} from "react"
import Search from "./Search"
import AnimeContainer from "./AnimeContainer"
import "./stylesheet.css"

const API = "http://localhost:8001/animes"
function App() {
  const [animeData, setAnimeData] = useState([])
  // const [search, setSearch] = useState("")
  useEffect(() =>{
    fetch(API)
    .then(response => response.json())
    .then(data => setAnimeData(data))
  },[])
  
  const filteredData = animeData.filter((eachSeries) => console.log(eachSeries.genre))
  
  return (
    <div>
      <Search/>
      <AnimeContainer animeData={animeData}/>
    </div>
  );
}
export default App;
