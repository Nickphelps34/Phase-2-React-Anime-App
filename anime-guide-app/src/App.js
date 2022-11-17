import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"
import AnimeContainer from "./AnimeContainer"
import NavBar from "./NavBar"
import "./stylesheet.css"
import Recommendation from "./Recommendations"
import MyAnime from "./MyAnime"
import "./Form.css"

const API = "http://localhost:8001/animes"

function App() {

  const [animeData, setAnimeData] = useState([])
  const [myFavs, setMyFavs] = useState([])

  useEffect(() =>{
    fetch(API)
    .then(response => response.json())
    .then(data => setAnimeData(data))
  },[])

  const postAnime = (newAnime) => {setAnimeData([...animeData, newAnime])}

  return (
    <div className="whole-app">
      <NavBar />
        <Switch>
          <Route path="/recommendations">
            <Recommendation animeData={animeData}/>
          </Route>
          <Route path="/myanimes">
            <MyAnime myFavs={myFavs} postAnime={postAnime}/>
          </Route>
          <Route exact path="/">
            <AnimeContainer setMyFavs={setMyFavs} myFavs={myFavs} animeData={animeData}/>
          </Route>
          <Route path="*">
            <h1>Are you lost????? 404 not found</h1>
          </Route>
        </Switch>
    </div>
  );
}
export default App;
