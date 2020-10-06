import React from "react";
import Header from "../Header/Header";
import MovieFilters from "../MovieFilters/MovieFilters";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import MoviesList from "../../containers/MoviesList/MoviesList";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="content">
                <MovieFilters />
                <ErrorBoundary hasErrors={false}>
                    <MoviesList />
                </ErrorBoundary>
                <Footer><Logo /></Footer>
            </div>
        </div>
    );
}

export default Home;