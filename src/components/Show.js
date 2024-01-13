import React from "react"
import { Link, Outlet, useOutletContext } from "react-router-dom";
import "../App.css";


function Show({ showData }){

    const {showsList, genres} = useOutletContext()

    return (
        <div className="showList">
            <img src={showData.image.medium} className="showListImage"/>
            <h5>{showData.name}</h5>
            <small>Rating: {showData.rating.average}</small><br/>
            <small>From {showData.premiered}</small><br/>
            <small>
                <Link to={`/shows/${showData.id}`}>View details</Link> 
            </small> 
        </div>

    )
}

export default Show;