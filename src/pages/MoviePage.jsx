import { Link } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

const reviewPlaceHolder = {
    name: "Mario Rossi",
    vote: 4,
    text: "lorem ipsum dolor"
};

const reviews = [
    reviewPlaceHolder,
    reviewPlaceHolder
]

function MoviePage() {
    return <>
        <Link to="/movies">Go back to full list</Link>
        <h1>Single movie page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, unde!</p>

        <div className="cards-container">
            {reviews.map(review => <ReviewCard review={review} />)}
        </div>
    </>
}

export default MoviePage;