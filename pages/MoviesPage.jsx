import { Link } from "react-router-dom";

function MoviesPage() {
	return <>
		<h1>All Movies</h1>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, unde!</p>

		<div className="cards-container">
			<div className="card">
				<h2>Title</h2>
				<h3>Director</h3>
				<p>Abstract</p>
				<Link to={`/movies/1`}>Other details</Link>
			</div>

			<div className="card">
				<h2>Title</h2>
				<h3>Director</h3>
				<p>Abstract</p>
				<Link to={`/movies/1`}>Other details</Link>
			</div>

			<div className="card">
				<h2>Title</h2>
				<h3>Director</h3>
				<p>Abstract</p>
				<Link to={`/movies/1`}>Other details</Link>
			</div>

			<div className="card">
				<h2>Title</h2>
				<h3>Director</h3>
				<p>Abstract</p>
				<Link to={`/movies/1`}>Other details</Link>
			</div>

			<div className="card">
				<h2>Title</h2>
				<h3>Director</h3>
				<p>Abstract</p>
				<Link to={`/movies/1`}>Other details</Link>
			</div>
		</div>
	</>
}

export default MoviesPage;