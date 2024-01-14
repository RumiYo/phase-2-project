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
                    <p>Rating: {show.rating.average}</p>
                    <p>Premiered: {show.premiered}</p>
                    <h4>Genres</h4>
                    <ul>
                        {show.genres.map(genre => <li key={genre}>{genre}</li>)}
                    </ul>
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