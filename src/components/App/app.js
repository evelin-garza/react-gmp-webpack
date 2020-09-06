import React, { useState } from "react";
import Header from "../Header/Header";
import MoviesList from "../../containers/MoviesList/MoviesList";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import MovieFilters from "../../components/MovieFilters/MovieFilters";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

import "./App.scss";
import MovieContext from "../../Hooks/Context/MovieContext";

const App = () => {
    const [sortBy, setSortBy] = useState('release_date');
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <>
            <Header selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
            <div className="content">
                <MovieFilters
                    sortBy={sortBy}
                    setSortBy={setSortBy} />
                <ErrorBoundary hasErrors={false}>
                    <MovieContext.Provider value={{
                        setSelectedMovie
                    }}>
                        <MoviesList
                            sortBy={sortBy} />
                    </MovieContext.Provider>
                </ErrorBoundary>
                <Footer><Logo /></Footer>
            </div>
        </>
    );
};

export default App;
