import React,{useState} from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function AddAShow(){

    const {showsList, genres} = useOutletContext();
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [network, setNetwork] = useState('');
    const [country, setCountry] = useState('');
    const [imageUrl, setImageUrl] = useState(''); 
    const [summary, setSummary] = useState('');

    function submitClick(e){
        e.preventDefault();
    }

    return (
        <main>
            <h1>Add show</h1>
            <form id="inputForm">
                <label className="inputLabel" for="name">Show title: </label>
                <input type="text" id="name"  size="40" onChange={ e => setName(e.target.value) } required/><br/>

                <label  className="inputLabel" for="rating">Rating:   </label>
                <input type="number" min="0.1" max="10.0" step="0.1" id="rating" onChange={ e => setRating(e.target.value) } required/><br/>

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
                <input type="text" id="network"   size="30" onChange={ e => setNetwork(e.target.value) } required /><br/>

                <label className="inputLabel" for="country">Country: </label>
                <input type="text" id="country" onChange={ e => setCountry(e.target.value) } required /><br/>

                <label className="inputLabel" for="imageUrl">Image URL: </label>
                <input type="text" id="imageUrl" size="60" onChange={ e => setImageUrl(e.target.value) } required /><br/>

                <label className="inputLabel" for="summary">Summary: </label>
                <textarea id="summary" rows="7" cols="100"  onChange={ e => setSummary(e.target.value) } required /><br/>

                <button id="addButton" type="submit" value="Add a new show" onClick={submitClick}>Add a new show</button>        
                

            </form>
        </main>
    )
}

export default AddAShow;