import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import AddMovieModal from "../AddMovieModal/AddMovieModal";

import "./Header.scss";

const Header = () => {
    const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

    const showOrHideAddMovie = (isOpen) => {
        setIsAddMovieOpen(isOpen);
        setBodyStyleOverflow(isOpen);
    }

    const setBodyStyleOverflow = (isOpen) => {
        document.body.style.overflow = (isOpen) ? 'hidden' : 'unset';
    }

    const openAddMovie = () => showOrHideAddMovie(true);

    return (
        <header className="header">
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
            <>
                <AddMovieModal
                    onClose={showOrHideAddMovie}
                    show={isAddMovieOpen} />
            </>
        </header>
    );
};

export default Header;