import { Link } from "react-router-dom";

function HomePage() {
    return <>
        <h1>Movies Homepage</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, unde!</p>
        <Link to="/movies">View All Movies</Link>
    </>
}

export default HomePage;