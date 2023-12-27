import {NavLink} from "react-router-dom";
import "./NavBar.css";

function NavBar(){
    return (
        <nav>
            <NavLink 
                to="/"
                className="nav-link"
            >Home
            </NavLink>
            <NavLink 
                to="/genres"
                className="nav-link"
            >Genres
            </NavLink>
            <NavLink 
                to="/shows"
                className="nav-link"
            >Shows
            </NavLink>
        </nav>
    )
}

export default NavBar;