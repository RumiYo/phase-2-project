import { Outlet, useOutletContext } from "react-router-dom";

function Home(){

    const {showsList, genres} = useOutletContext()
    const showListRanking = showsList.sort((a,b) => b.rating.average - a.rating.average )
    const top10Shows = showListRanking.slice(0,10);

    const top10ShowsDisplayed = top10Shows.map(show =>
         (
            <div className="top10Shows" key={show.id}>
                <h2>{show.name}</h2>
                <img src={show.image.original} className="top10ShowsImage"/>
                <div className="top10ShowsText">
                    <p><b>Rating: </b>{show.rating.average}</p>
                    <p><b>Premiered: </b>{show.premiered}  /  Ended: {show.ended}</p>
                    <p><b>Genres: </b>{show.genres.join(', ')}</p>
                    <p><b>Network: </b>{show.network.name}  /  <b>Country: </b> {show.network.country.name}</p> 
                    <h4>Summary</h4>
                    <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
                </div>
            </div>
        )
     )

    return (
        <main>
            <h1>Home</h1>
            <h3>Top 10 shows</h3>
            {top10ShowsDisplayed}
        </main>
    )
}

export default Home;