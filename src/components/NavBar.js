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
                to="/shows"
                className="nav-link"
            >All Shows
            </NavLink>
            <NavLink 
                to="/AddNew"
                className="nav-link"
            >Add
            </NavLink>
        </nav>
    )
}

export default NavBar;