import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App(){

  const [ showsList, setShowsList ] = useState([])
  const [ genres, setGenres ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/shows')
    .then(res => res.json())
    .then(data => setShowsList(data))
  },[])

  useEffect(() => {
      var uniqueGenres = [];
    showsList.forEach( show => {
      show.genres.forEach(genre => {
        if(!uniqueGenres.includes(genre)){
          uniqueGenres.push(genre);
        }
      })
    })
    setGenres(uniqueGenres)
  },[showsList])

    console.log(genres)


  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={{showsList: showsList, genres: genres}}/>
    </>
  )
}

export default App;