import { Link } from "react-router-dom";

function MovieCard({ movie }) {

    const { id, title, director, abstract, image } = movie;

    const apiAssetsUrl = 'http://localhost:3000/static/moviesImg/';

    return <div className="card">
        <img src={`${apiAssetsUrl}${image}`} alt={title} />
        <h2>{title}</h2>
        <h3>{director}</h3>
        <p>{abstract}</p>
        <Link to={`/movies/${id}`}>Other details</Link>
    </div>

}

export default MovieCard;