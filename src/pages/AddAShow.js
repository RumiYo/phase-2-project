import React,{useState} from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function AddAShow(){

    const {showsList, genres} = useOutletContext();

    const [nameNew, setNameNew] = useState('');
    const [ratingNew, setRatingNew] = useState('');
    const [genresNew, setGenresNew] = useState([]);
    const [networkNew, setNetworkNew] = useState('');
    const [countryNew, setCountryNew] = useState('');
    const [imageUrlNew, setImageUrlNew] = useState(''); 
    const [summaryNew, setSummaryNew] = useState('');




    function checkboxSelect(e){
        let selectedGenres = genresNew
        console.log(e.target.checked,e.target.value)
        if(e.target.checked===true){
            selectedGenres.push(e.target.value)
        }else{
            selectedGenres = selectedGenres.filter(genre => genre!==e.target.value)
            }
            setGenresNew(selectedGenres)
            console.log(genresNew)
        }


    function submitClick(e){
        e.preventDefault();
        console.log("clicked", genresNew )
    }

    return (
        <main>
            <h1>Add show</h1>
            <form id="inputForm">
                <label className="inputLabel" for="name">Show title: </label>
                <input type="text" id="name"  size="40" onChange={ e => setNameNew(e.target.value) } required/><br/>

                <label  className="inputLabel" for="rating">Rating:   </label>
                <input type="number" min="0.1" max="10.0" step="0.1" id="rating" onChange={ e => setRatingNew(e.target.value) } required/><br/>

                <label className="inputLabel" for="genres">Genres: </label>
                <div id="genresSelect" >
                    {genres.map(genre => (
                        <span key={genre}>
                            <input type="checkbox" id={genre} value={genre}  onChange={checkboxSelect}/>
                            <label for={genre} className="checkboxelabels" >{genre}</label>
                        </span>
                    ))}
                </div><br/>

                <label className="inputLabel" for="network">Network: </label>
                <input type="text" id="network"   size="30" onChange={ e => setNetworkNew(e.target.value) } required /><br/>

                <label className="inputLabel" for="country">Country: </label>
                <input type="text" id="country" onChange={ e => setCountryNew(e.target.value) } required /><br/>

                <label className="inputLabel" for="imageUrl">Image URL: </label>
                <input type="text" id="imageUrl" size="60" onChange={ e => setImageUrlNew(e.target.value) } required /><br/>

                <label className="inputLabel" for="summary">Summary: </label>
                <textarea id="summary" rows="7" cols="100"  onChange={ e => setSummaryNew(e.target.value) } required /><br/>

                <button id="addButton" type="submit" value="Add a new show" onClick={submitClick}>Add a new show</button>        
                

            </form>
        </main>
    )
}

export default AddAShow;