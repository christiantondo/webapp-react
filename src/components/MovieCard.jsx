import { Link } from "react-router-dom";

function MovieCard() {

	return <div className="card">
		<h2>Title</h2>
		<h3>Director</h3>
		<p>Abstract</p>
		<Link to={`/movies/1`}>Other details</Link>
	</div>

}

export default MovieCard;