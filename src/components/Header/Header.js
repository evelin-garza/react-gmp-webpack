import React, { useState, useCallback } from "react";
import { connect } from 'react-redux';

import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import AddMovieModal from "../AddMovieModal/AddMovieModal";
import MovieDetails from "../MovieDetails/MovieDetails";
import * as movieActions from "../../actions/movieActions";

import "./Header.scss";

const Header = ({ selectedMovie, onCloseMovieDetails }) => {
    const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

    const showOrHideAddMovie = useCallback((isOpen) => {
        setIsAddMovieOpen(isOpen);
        setBodyStyleOverflow(isOpen);
    }, [isAddMovieOpen]);

    const setBodyStyleOverflow = (isOpen) => {
        document.body.style.overflow = (isOpen) ? 'hidden' : 'unset';
    }

    const openAddMovie = () => showOrHideAddMovie(true);
    const closeAddMovie = () => showOrHideAddMovie(false);
    const closeMovieDetails = () => onCloseMovieDetails();

    return (
        <header className="header">
            {selectedMovie && Object.keys(selectedMovie).length > 0
                ? <MovieDetails selectedMovie={selectedMovie} onClose={closeMovieDetails} />
                : <>
                    <div className="container">
                        <div className="top-bar">
                            <Logo />
                            <button onClick={openAddMovie} className="btn-add-movie">+ ADD MOVIE</button>
                        </div>
                        <div className="main-content">
                            <h2>FIND YOUR MOVIE</h2>
                            <Searchbar />
                        </div>
                    </div>
                    <AddMovieModal
                        onClose={closeAddMovie}
                        show={isAddMovieOpen} />
                </>
            }
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseMovieDetails: () => dispatch(movieActions.clearSelectedMovie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);