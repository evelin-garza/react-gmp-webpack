import React from "react";
import Header from "../../components/Header/Header";
import MovieFilters from "../../components/MovieFilters/MovieFilters";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import MoviesList from "../../containers/MoviesList/MoviesList";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";

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