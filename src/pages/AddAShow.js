import React,{useState} from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function AddAShow(){

    const {showsList, genres} = useOutletContext();

    const [nameNew, setNameNew] = useState('');
    const [ratingNew, setRatingNew] = useState('');
    const [premieredNew, setPremieredNew] = useState('');
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
        }


    function submitClick(e){
        e.preventDefault();
        const newShow = {
            name: nameNew,
            genres: genresNew,
            rating:{average: parseInt(ratingNew)},
            network:{name: networkNew, country:{name: countryNew,}},
            image:{original: imageUrlNew},
            summary: summaryNew,
            premiered: premieredNew,
        }
        console.log(newShow)
    }

    return (
        <main>
            <h1>Add show</h1>
            <form id="inputForm">
                <label className="inputLabel" for="name">Show title: </label>
                <input type="text" id="name" placeholder="Stranger Things" size="40" onChange={ e => setNameNew(e.target.value) } required/><br/>

                <label  className="inputLabel" for="rating">Rating:   </label>
                <input type="number" min="0.1" max="10.0" step="0.1" id="rating" placeholder="8.9" onChange={ e => setRatingNew(e.target.value) } required/><br/>

                <label  className="inputLabel" for="premiered">Premiered:   </label>
                <input type="date" id="premiered" placeholder="" onChange={ e => setPremieredNew(e.target.value) } required/><br/>

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
                <input type="text" id="network" placeholder="Netflix"  size="30" onChange={ e => setNetworkNew(e.target.value) } required /><br/>

                <label className="inputLabel" for="country">Country: </label>
                <input type="text" id="country" placeholder="United States" onChange={ e => setCountryNew(e.target.value) } required /><br/>

                <label className="inputLabel" for="imageUrl">Image URL: </label>
                <input type="url" pattern="https://.*" placeholder="https://example.com" id="imageUrl" size="60" onChange={ e => setImageUrlNew(e.target.value) } required /><br/>

                <label className="inputLabel" for="summary">Summary: </label>
                <textarea id="summary" rows="7" cols="100" placeholder="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl." onChange={ e => setSummaryNew(e.target.value) } required /><br/>

                <button id="addButton" type="submit" value="Add a new show" onClick={submitClick}>Add a new show</button>        
                

            </form>
        </main>
    )
}

export default AddAShow;