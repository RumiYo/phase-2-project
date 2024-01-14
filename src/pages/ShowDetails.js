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
            <p><b>Rating: </b>{show.rating.average}</p>
            <p><b>Premiered: </b>{show.premiered}  /  Ended: {show.ended}</p>
            <p><b>Genres: </b>{show.genres.join(', ')}</p>
            <p><b>Network: </b>{show.network.name}  /  <b>Country: </b> {show.network.country.name}</p> 
            <h4>Summary</h4>
            <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
            <Link id="closeDetails" to={`/shows`}>Close details</Link> 
        </div>

    )
}

export default ShowDetails;