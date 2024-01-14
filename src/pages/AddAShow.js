import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function AddAShow(){

    const {showsList, genres} = useOutletContext()

    return (
        <main>
            <h1>Add show</h1>
            <form id="inputForm">
                <label className="inputLabel" for="name">Show title: </label>
                <input type="text" id="name"  size="40" required/><br/>
                <label  className="inputLabel" for="rating">Rating:   </label>
                <input type="text" id="rating" required/><br/>
                <label className="inputLabel" for="genres">Genres: </label>
                <div id="genresSelect" >
                    {genres.map(genre => (
                        <span key={genre}>
                            <input type="checkbox" id={genre} value={genre}  />
                            <label for={genre} className="checkboxelabels" >{genre}</label>
                        </span>
                    ))}
                </div><br/>
                <label className="inputLabel" for="network">Network: </label>
                <input type="text" id="network"   size="40" required /><br/>
                <label className="inputLabel" for="country">Country: </label>
                <input type="text" id="country" required /><br/>
                <label className="inputLabel" for="imageUrl">Image URL: </label>
                <input type="text" id="imageUrl"   size="60" required /><br/>
                <label className="inputLabel" for="summary">Summary: </label>
                <textarea id="summary" rows="7" cols="100" required /><br/>


                

            </form>
        </main>
    )
}

export default AddAShow;