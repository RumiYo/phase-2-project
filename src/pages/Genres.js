import { Outlet, useOutletContext } from "react-router-dom";

function Genres(){

    const {showsList, genres} = useOutletContext();
    console.log(showsList, genres)


    return (
        <main>
            <h1>Genres</h1>
        </main>
    )
}

export default Genres;