import React from "react";
import PropTypes from "prop-types";

import "./MovieCard.scss";

const MovieCard = (props) => {
    const { title, imageUrl, genre, year } = props;
    return (
        <div className="movie-card">
            <div className="movie-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="movie-details">
                <div className="movie-info">
                    <p className="movie-title">{title}</p>
                    <span className="movie-year">{year}</span>
                </div>
                <p className="movie-genre">{genre}</p>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
};

export default MovieCard;