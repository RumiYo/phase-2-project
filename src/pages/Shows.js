import { Outlet, useOutletContext } from "react-router-dom";
import Show from "../components/Show"

function Shows(){

    const {showsList, genres} = useOutletContext()

    return (
        <main>
            <h1>All Shows</h1>
            {showsList.map(showData => <Show showData={showData} key={showData.id}/>)}
        </main>
    )
}

export default Shows;