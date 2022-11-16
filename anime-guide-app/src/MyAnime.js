import React, {useState} from "react";
import AnimeCards from "./AnimeCards";

function MyAnime({myFavs,setMyFavs, postAnime}){

    const [title, setTitle] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [genre ,setGenre] = useState("")
    const [personalRating, setPersonalRating] = useState("")
 
    const handleSubmit = (e) => {
        e.preventDefault()
        let addAnime = {
          title: title,
          productionStudio: "null",
          startDate: "null",
          endDate: "null",
          imageURL: imageURL,
          genre: genre,
          numberOfSeasons: "null",
          numberOfEpisodes: "null",
          imbdRating: "null",
          description: "null",
          personalRating: personalRating,
          }
      fetch ("http://localhost:8001/myAnime",{
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(addAnime)
        })
        .then(res => res.json())
        .then(postAnime(addAnime)) 
      }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <input value={title} type="text" name="title" placeholder="Title" 
                    onChange = {(e) => setTitle(e.target.value)}/>
                    <input value={imageURL} type="text" name="imageURL" placeholder="Add Image URL"
                    onChange = {(e) => setImageURL(e.target.value)}/>
                    <input value={genre} type="text" name="genre" placeholder="Genre"
                    onChange = {(e) => setGenre(e.target.value)} />
                    <input value={personalRating} type="number" name="rating" placeholder="Rating" step="1.00"
                    onChange = {(e) => setPersonalRating(e.target.value)} />
                </div>
                <input className="" type="submit" value="addAnime" />
            </form>

            <div className="myFavsCards">
                {myFavs.map((anime) => <AnimeCards setMyFavs={setMyFavs} myFavs={myFavs} key={anime.id} anime={anime}/>)}
            </div>
        </div>
    )
}

export default MyAnime