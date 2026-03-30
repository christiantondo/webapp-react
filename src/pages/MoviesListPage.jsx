import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

function MoviesPage() {

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3000/api/movies").then(res => {
			console.log(res.data);
			setMovies(res.data);
		}).catch(err =>
			console.error("Ops...", err.message));
	}, []);

	return <>
		<h1>All Movies</h1>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, unde!</p>

		<div className="cards-container">
			{movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
		</div>
	</>
}

export default MoviesPage;