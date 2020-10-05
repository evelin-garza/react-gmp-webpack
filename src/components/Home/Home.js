import React from "react";
import Header from "../Header/Header";
import MovieFilters from "../MovieFilters/MovieFilters";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import MoviesList from "../../containers/MoviesList/MoviesList";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

const Home = () => {
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
    );
}

export default Home;