import React from "react"
import "../App.css";


function Show({ showData }){
    return (
        <div className="show">
            <img src={showData.image.medium} />
         <h5>{showData.name}</h5>
         <small>Rating: {showData.rating.average}</small><br/>
         <small>From {showData.premiered}</small>
        </div>

    )
}

export default Show;