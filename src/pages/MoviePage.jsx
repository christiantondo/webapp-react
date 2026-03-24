import { Link } from "react-router-dom";

function MoviePage() {
    return <>
        <Link to="/movies">Go back to full list</Link>
        <h1>Single movie page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, unde!</p>
    </>
}

export default MoviePage;