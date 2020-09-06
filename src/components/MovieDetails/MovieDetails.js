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
                    <label onClick={onClose}>X</label>
                </div>
                <div className="movie-content">
                    <img alt={selectedMovie.title} src={selectedMovie.movieUrl} />
                    <div className="info">
                        <div className="row">
                            <span>{selectedMovie.title}</span>
                            <span>{selectedMovie.rating}</span>
                        </div>

                        <div className="row">
                            <span>{getMovieYear(selectedMovie.release_date)}</span>
                            <span>{selectedMovie.runtime}</span>
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