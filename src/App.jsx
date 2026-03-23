import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import MoviesPage from "../pages/MoviesPage"
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
    // const [state, setState] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route path='/' element={<HomePage />}></Route>
                        <Route path="/movies" element={<MoviesPage />}></Route>
                        <Route path='/movies/:id' element={<MoviePage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
