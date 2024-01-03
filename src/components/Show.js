import React from "react"
import "../App.css";


function Show({ showData }){
    return (
        <div className="show">
            <img src={showData.image.medium} />
         <h4>{showData.name}</h4>
         <p>Rating: {showData.rating.average}</p>
        </div>

    )
}

export default Show;