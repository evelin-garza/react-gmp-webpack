import React, { useState, useCallback } from "react";

import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import AddMovieModal from "../AddMovieModal/AddMovieModal";

import "./Header.scss";

const Header = () => {
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

    return (
        <header className="header">
            <>
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
        </header>
    );
};

export default Header;