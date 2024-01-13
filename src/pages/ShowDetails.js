import { useParams, useOutletContext  } from "react-router-dom";
import { Link } from "react-router-dom";

function ShowDetails(){


    const params = useParams();
    const {showsList, genres} = useOutletContext();

    console.log('details!', params)


    const show = showsList.find(item => item.id === parseInt(params.id))
    console.log(show.name)


    return (
        <div id="showDetail">
            <h1>{show.name}</h1>
            <img src={show.image.original} id="showDetailImage"/>
            <p>Rating: {show.rating.average}</p>
            <p>Premiered: {show.premiered}</p>
            <h4>Genres</h4>
            <ul>
                {show.genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
            <h4>Summary</h4>
            <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
            <Link id="closeDetails" to={`/shows`}>Close details</Link> 
        </div>

    )
}

export default ShowDetails;