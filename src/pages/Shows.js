import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Show from "../components/Show";
import ShowListFilter from "../components/ShowListFilter";

function Shows(){

    const {showsList, genres} = useOutletContext()

    const [ filter, setFilter ]= useState("");
    const [ selectedGenre, setSelectedGenre ] = useState("All");
    let displayedShowList = showsList;
    let selectedGenreShows = showsList;
    const filterGneres = ["All", ...genres]

    function genreFilterSelect(e){
        setSelectedGenre(e.target.value)
    }

    if(selectedGenre==="All"){
        selectedGenreShows = showsList;
    }else{
        selectedGenreShows = showsList.filter(show => show.genres.includes(selectedGenre))
        displayedShowList = selectedGenreShows;
    }


    if(filter==="Year"){
        displayedShowList = selectedGenreShows.sort((a,b) => {
            if(a.premiered < b.premiered){
                return 1;
            }if(a.premiered > b.premiered){
                return -1;
            }
            return 0;
        })
    }else if(filter==="Rating"){
         displayedShowList = selectedGenreShows.sort((a,b) => b.rating.average - a.rating.average )
    }
    else if(filter==="Name"){
         displayedShowList = selectedGenreShows.sort((a,b) => {
            if(a.name < b.name){
                return -1;
            }if(a.name > b.name){
                return 1;
            }
            return 0;
        })
    }  

    return (
        <main>
            <h1>All Shows</h1>
            <span>Select a genre   </span>
                <select id="genreSelect" onChange={genreFilterSelect}>
                    {filterGneres.map(genre => <option value={genre} key={genre}>{genre}</option>)}
                </select>
            <ShowListFilter filter={filter} setFilter={setFilter}/>
            <Outlet context={{showsList: showsList, genres: genres}} /> 
            <div className="allShows">
                {displayedShowList.map(showData => <Show showData={showData} key={showData.id} />)}
            </div>
        </main>
    )
}

export default Shows;