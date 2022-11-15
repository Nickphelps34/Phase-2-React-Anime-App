import React, {useState, useEffect} from "react"
import AnimeContainer from "./AnimeContainer"
import NavBar from "./NavBar"
import "./stylesheet.css"
import Recommendation from "./Recommendations"

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
      <NavBar />
      <AnimeContainer animeData={animeData}/>
    </div>
  );
}
export default App;
