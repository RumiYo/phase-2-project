import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App(){

  const [ showsList, setShowsList ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/shows')
    .then(res => res.json())
    .then(data => setShowsList(data))
  },[])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={showsList}/>
    </>
  )
}

export default App;