import React from "react";

import "./MovieDetails.scss";
import Logo from "../Logo/Logo";

const MovieDetails = ({ selectedMovie, onClose }) => {
    const getMovieYear = (movieReleaseDate) => {
        const date = movieReleaseDate.split('-');
        return date[0];
    };

    return (
        <div className="movie-details-container">
            <div className="container">
                <div className="topbar">
                    <Logo />
                    <span className="search-icon" onClick={onClose}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="movie-content">
                    <img alt={selectedMovie.title} src={selectedMovie.movieUrl} />
                    <div className="info">
                        <div className="row">
                            <span className="title">{selectedMovie.title}</span>
                            <span className="rating">{selectedMovie.rating}</span>
                        </div>

                        <div className="row">
                            <span className="release-date">{getMovieYear(selectedMovie.release_date)}</span>
                            <span className="duration">{selectedMovie.runtime}</span>
                        </div>

                        <p className="description">
                            {selectedMovie.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;