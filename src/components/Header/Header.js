import React, { Component } from "react";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import AddMovieModal from "../AddMovieModal/AddMovieModal";
import PropTypes from "prop-types";

import "./Header.scss";

export default class Header extends Component {
    openAddMovieModal = () => {
        this.props.showOrHideModal(true, 'add-movie');
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="top-bar">
                        <Logo />
                        <button onClick={this.openAddMovieModal} className="btn-add-movie">+ ADD MOVIE</button>
                    </div>
                    <div className="main-content">
                        <h2>FIND YOUR MOVIE</h2>
                        <Searchbar />
                    </div>
                </div>
                <>
                    <AddMovieModal
                        onClose={this.props.showOrHideModal}
                        show={this.props.isModalOpened && this.props.modalType === 'add-movie'} />
                </>
            </header>
        );
    }
}

Header.propTypes = {
    isModalOpened: PropTypes.bool.isRequired,
    modalType: PropTypes.string.isRequired,
    showOrHideModal: PropTypes.func.isRequired
}
