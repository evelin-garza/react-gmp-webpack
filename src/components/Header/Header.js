import React from "react";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";

import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="top-bar">
                    <Logo />
                    <button className="btn-add-movie">+ ADD MOVIE</button>
                </div>
                <div className="main-content">
                    <h2>FIND YOUR MOVIE</h2>
                    <Searchbar />
                </div>
            </div>
        </header>
    );
};

export default Header;