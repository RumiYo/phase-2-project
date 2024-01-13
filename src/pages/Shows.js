import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Show from "../components/Show";
import ShowListFilter from "../components/ShowListFilter";

function Shows(){

    const {showsList, genres} = useOutletContext()
    const [ filter, setFilter ]= useState("");
    let displayedShowList = showsList;

    if(filter==="Year"){
        displayedShowList = showsList.sort((a,b) => {
            if(a.premiered < b.premiered){
                return 1;
            }if(a.premiered > b.premiered){
                return -1;
            }
            return 0;
        })
    }else if(filter==="Rating"){
         displayedShowList = showsList.sort((a,b) => b.rating.average - a.rating.average )
    }
    else if(filter==="Name"){
         displayedShowList = showsList.sort((a,b) => {
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
            <ShowListFilter filter={filter} setFilter={setFilter}/>
            <Outlet context={{showsList: showsList, genres: genres}} /> 
            <div className="allShows">
                {displayedShowList.map(showData => <Show showData={showData} key={showData.id} />)}
            </div>
        </main>
    )
}

export default Shows;