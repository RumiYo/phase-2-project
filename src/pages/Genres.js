import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Show from "../components/Show"

function Genres(){

    const {showsList, genres} = useOutletContext();

    const [ selectedGenre, setSelectedGenre ] = useState("");

function genreFilterSelect(e){
    setSelectedGenre(e.target.value)
}

const selectedGenreShows = showsList.filter(show => show.genres.includes(selectedGenre))

console.log(selectedGenreShows)

    return (
        <main>
            <h1>Genres</h1>
            <span>Select a genre   </span>
                <select id="genreSelect" onChange={genreFilterSelect}>
                    {genres.map(genre => <option value={genre} key={genre}>{genre}</option>)}
                </select>
                <div>
                 {selectedGenreShows.map(showData => <Show showData={showData} key={showData.id}/>)}
                </div>
        </main>
    )
}

export default Genres;