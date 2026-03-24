import MovieCard from "../components/MovieCard";

function MoviesPage() {

    const moviePlaceHolder = {
        id: 99,
        title: "Blank",
        director: "Mike",
        abstract: "Lorem ipsum dolor sit amet",
        image: "/directory/x.jpg"
    };

    return <>
        <h1>All Movies</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, unde!</p>

        <div className="cards-container">
            <MovieCard movie={moviePlaceHolder} />
        </div>
    </>
}

export default MoviesPage;