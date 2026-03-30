function ReviewCard({ review }) {

    const { name, vote, text } = review;

    return <div className="card">
        <h2>{name}</h2>

        <div>
            {[1, 2, 3, 4, 5].map((n, i) => {
                return <i key={i} className={"fa-star " + (vote >= n ? "fa-solid" : "fa-regular")}></i>
            })}
        </div>

        <p>{text}</p>
    </div>

}

export default ReviewCard;