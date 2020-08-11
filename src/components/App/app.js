import React from "react";
import Header from "../Header/Header";
import MoviesList from "../../containers/MoviesList/MoviesList";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import MovieFilters from "../../components/MovieFilters/MovieFilters";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

import "./App.scss";

const App = () => {
    return (
        <>
            <Header />
            <div className="content">
                <MovieFilters />
                <ErrorBoundary hasErrors={false}>
                    <MoviesList />
                </ErrorBoundary>
                <Footer><Logo /></Footer>
            </div>
        </>
    )
}

export default App;