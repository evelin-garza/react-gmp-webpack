import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "../Shared/Popup/Popup";

import "./MovieCard.scss";

export default class MovieCard extends Component {
    state = {
        isPopupOpened: false
    }

    openEditMovieModal = () => {
        this.props.setCurrentMovie(this.props.movie);
        this.props.showOrHideModal(true, 'edit-movie');
        this.showOrHideMovieOptions();
    }

    openDeleteMovieModal = () => {
        this.props.setCurrentMovie(this.props.movie);
        this.props.showOrHideModal(true, 'delete-movie');
        this.showOrHideMovieOptions();
    }

    showOrHideMovieOptions = () => {
        this.setState({ isPopupOpened: !this.state.isPopupOpened });
    }

    getMovieGenre = (genres) => {
        return genres.map(genre => genre.name).join(", ");
    }

    getMovieYear = (release_date) => {
        const date = release_date.split('-');
        return date[0];
    }

    render() {
        const { title, movieUrl, release_date, genres } = this.props.movie;

        return (
            <div className="movie-card">
                <div className="movie-image">
                    <img src={movieUrl} alt={title} />
                </div>
                <div className="movie-options">
                    <span className="movie-options-icon" onClick={this.showOrHideMovieOptions}>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </span>
                    <Popup
                        showOrHideMovieOptions={this.showOrHideMovieOptions}
                        isPopupOpened={this.state.isPopupOpened}
                        openEditMovieModal={this.openEditMovieModal}
                        openDeleteMovieModal={this.openDeleteMovieModal}
                    />
                </div>
                <div className="movie-details">
                    <div className="movie-info">
                        <p className="movie-title">{title}</p>
                        <span className="movie-year">{this.getMovieYear(release_date)}</span>
                    </div>
                    <p className="movie-genre">{this.getMovieGenre(genres)}</p>
                </div>
            </div>
        );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        movieUrl: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
    }).isRequired,
    showOrHideModal: PropTypes.func.isRequired,
    setCurrentMovie: PropTypes.func.isRequired
};
