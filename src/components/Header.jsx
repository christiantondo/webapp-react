import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <Link to="/">Homepage</Link>
            <Link to="/movies">Movies</Link>
        </header>
    )
}

export default Header;