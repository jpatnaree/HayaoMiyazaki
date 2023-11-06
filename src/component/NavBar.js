import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/new">Add New Movie</NavLink>
            <NavLink to="/favorite">Favorite</NavLink>
            </nav>
    )
}

export default NavBar;
