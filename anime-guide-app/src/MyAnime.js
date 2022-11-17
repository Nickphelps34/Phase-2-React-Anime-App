import React, {useState} from "react";
import MyFavsCard from "./MyFavsCard";

function MyAnime({myFavs,setMyFavs, postAnime}){

    const [title, setTitle] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [genre ,setGenre] = useState("")
    // const [notes, setNotes] = useState("")
 
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
        //   notes: notes,
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
            <h1 className="anime-form-title">My Favorite Animes</h1>
            <hr className='hr'/>
            <div className="full-form">
            <form className='form-format' onSubmit = {handleSubmit}>
                <div className="form-box">
                    <input value={title} type="text" name="title" placeholder="Title" 
                    onChange = {(e) => setTitle(e.target.value)}/>
                    <input value={imageURL} type="text" name="imageURL" placeholder="Add Image URL"
                    onChange = {(e) => setImageURL(e.target.value)}/>
                    <input value={genre} type="text" name="genre" placeholder="Genre"
                    onChange = {(e) => setGenre(e.target.value)} />
                    {/* <input value={notes} type="text" name="notes" placeholder="Personal Notes"
                    onChange = {(e) => setNotes(e.target.value)} /> */}
                </div>
                <input className="card-button" type="submit" value="Add to Favorites"/>
            </form>
            </div>

            <div className="myFavsCards">
                {myFavs.map((anime) => <MyFavsCard setMyFavs={setMyFavs} myFavs={myFavs} key={anime.id} anime={anime}/>)}
            </div>
        </div>
    )
}

export default MyAnime