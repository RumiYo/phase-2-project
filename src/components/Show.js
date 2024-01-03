import React from "react"

function Show({ showData }){
    return (
        <div>
            <img src={showData.image.medium} />
         <h4>{showData.name}</h4>
         <p>Rating: {showData.rating.average}</p>
        </div>

    )
}

export default Show;