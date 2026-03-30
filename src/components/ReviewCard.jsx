import RatingStars from "./RatingStars";

function ReviewCard({ review }) {

    const { name, vote, text } = review;

    return <div className="card">
        <h2>{name}</h2>

        <div>
            <RatingStars vote={vote} />
        </div>

        <p>{text}</p>
    </div>

}

export default ReviewCard;