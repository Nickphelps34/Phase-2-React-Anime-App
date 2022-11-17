import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"
import AnimeContainer from "./AnimeContainer"
import NavBar from "./NavBar"
import "./CSS/stylesheet.css"
import Recommendation from "./Recommendations"
import MyAnime from "./MyAnime"
import "./CSS/Form.css"
import MyFavsContainer from "./MyFavsContainer"

const API = "http://localhost:8001/animes"
const myAnimeAPI ="http://localhost:8001/myAnime"
function App() {

  const [animeData, setAnimeData] = useState([])
  const [myFavs, setMyFavs] = useState([])

  useEffect(() =>{
    fetch(API)
    .then(response => response.json())
    .then(data => setAnimeData(data))
  },[])

  useEffect(()=>{
    fetch(myAnimeAPI)
    .then(response => response.json())
    .then(myAnimeData => setMyFavs(myAnimeData))
  },[])



  const postAnime = (newAnime) => {setMyFavs([...myFavs, newAnime])}
  
  function removeFavorites(id){
    const removePostedAnime = myFavs.filter(myAnime=> (myAnime.id !== id))
        setMyFavs(removePostedAnime)
  }


  return (
    <div className="whole-app">
      <NavBar />
        <Switch>
          <Route path="/recommendations">
            <Recommendation animeData={animeData}/>
          </Route>
          <Route path="/myanimes">
            <MyAnime myFavs={myFavs} postAnime={postAnime}/>
            <MyFavsContainer myFavs={myFavs} removeFavorites={removeFavorites}/>
          </Route>
          <Route exact path="/">
            <>
            <AnimeContainer setMyFavs={setMyFavs} myFavs={myFavs} animeData={animeData}/>
            </>
          </Route>
          <Route path="*">
            <h1>Are you lost????? 404 not found</h1>
          </Route>
        </Switch>
    </div>
  );
}
export default App;
