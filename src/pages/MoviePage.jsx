import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import RatingStars from "../components/RatingStars";
import ReviewForm from "../components/ReviewForm";

function MoviePage() {

    const { id } = useParams();

    const [movie, setMovie] = useState({
        title: "",
        abstract: "",
        reviews: [],
        average_review: ""
    });

    function getMovieData() {
        axios.get(`http://localhost:3000/api/movies/${id}`).then(res => {
            console.log(res.data);
            setMovie(res.data);
        }).catch(err =>
            console.error("Ops...", err.message));
    }

    useEffect(() => {

        console.log("Showing movie id:", id);
        getMovieData();

    }, [id]);

    return <>
        <Link to="/movies">Go back to full list</Link>
        <h1>{movie.title}</h1>
        <div>Average vote: <RatingStars vote={movie.average_review} /></div>
        <p>{movie.abstract}</p>

        <div className="cards-container">
            {movie.reviews.map(review => <ReviewCard key={review.id} review={review} />)}
        </div>

        <ReviewForm movieId={movie.id} onNewReview={getMovieData} />
    </>
}

export default MoviePage;