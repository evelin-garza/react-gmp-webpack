import React, { useState, useCallback } from "react";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import AddMovieModal from "../AddMovieModal/AddMovieModal";
import MovieDetails from "../MovieDetails/MovieDetails";
import PropTypes from "prop-types";

import "./Header.scss";

const Header = (props) => {
    const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);



    const showOrHideAddMovie = useCallback((isOpen) => {
        setIsAddMovieOpen(isOpen);
        setBodyStyleOverflow(isOpen);
    }, [isAddMovieOpen]);

    const setBodyStyleOverflow = (isOpen) => {
        document.body.style.overflow = (isOpen) ? 'hidden' : 'unset';
    }

    const openAddMovie = () => showOrHideAddMovie(true);
    const closeMovieDetails = () => props.setSelectedMovie(null);

    return (
        <header className="header">
            {props.selectedMovie
                ? <MovieDetails selectedMovie={props.selectedMovie} onClose={closeMovieDetails} />
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
                        onClose={showOrHideAddMovie}
                        show={isAddMovieOpen} />
                </>
            }
        </header>
    );
};

Header.propTypes = {
    setSelectedMovie: PropTypes.func,
    selectedMovie: PropTypes.object
}

export default Header;