import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"
import AnimeContainer from "./AnimeContainer"
import NavBar from "./NavBar"
import "./stylesheet.css"
import Recommendation from "./Recommendations"
import MyAnime from "./MyAnime"


const API = "http://localhost:8001/animes"

function App() {

  const [animeData, setAnimeData] = useState([])

  useEffect(() =>{
    fetch(API)
    .then(response => response.json())
    .then(data => setAnimeData(data))
  },[])

  return (
    <div>
      <NavBar />
        <Switch>
          <Route path="/recommendations">
            <Recommendation/>
          </Route>
          <Route path="/myanimes">
            <MyAnime/>
          </Route>
          <Route path="/">
            <AnimeContainer animeData={animeData}/>
          </Route>
        </Switch>
    </div>
  );
}
export default App;
