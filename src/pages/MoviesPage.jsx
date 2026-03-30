import MovieCard from "../components/MovieCard";

function MoviesPage() {

    const moviePlaceHolder = {
        id: 99,
        title: "Blank",
        director: "Mike",
        abstract: "Lorem ipsum dolor sit amet",
        image: "/directory/x.jpg"
    };

    const movies = [
        moviePlaceHolder,
        moviePlaceHolder
    ]

    return <>
        <h1>All Movies</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, unde!</p>

        <div className="cards-container">
            {movies.map(movie => <MovieCard movie={movie} />)}
        </div>
    </>
}

export default MoviesPage;