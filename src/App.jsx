import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import MoviesPage from './pages/MoviesListPage'
import NotFoundPage from './pages/NotFoundPage';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
    // const [state, setState] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route Component={DefaultLayout}>
                        <Route path='/' Component={HomePage}></Route>
                        <Route path='/movies' Component={MoviesPage}></Route>
                        <Route path='/movies/:id' Component={MoviePage}></Route>
                        <Route path='*' Component={NotFoundPage}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;