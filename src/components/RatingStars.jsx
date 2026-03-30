function RatingStars({ vote }) {

    return (
        [1, 2, 3, 4, 5].map((n, i) => {
            return <i key={i} className={"fa-star " + (vote >= n ? "fa-solid" : "fa-regular")}></i>
        })
    )
}

export default RatingStars;