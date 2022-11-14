import React, {useState, useEffect} from "react"

const API = "http://localhost:3000/animes"

function App() {
  const [animeData, setAnimeData] = useState([])
  useEffect(() =>{
    fetch(API)
    .then(response => response.json())
    .then(data => console.log(data))
  },[])
  return (
    <div>
      
    </div>
  );
}

export default App;