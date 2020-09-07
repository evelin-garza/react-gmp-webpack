import React, { useState, useContext, useCallback } from "react";
import Popup from "../Shared/Popup/Popup";
import EditMovieModal from "../../components/EditMovieModal/EditMovieModal";
import DeleteMovieModal from "../../components/DeleteMovieModal/DeleteMovieModal";

import "./MovieCard.scss";
import MovieContext from "../../Hooks/Context/MovieContext";
import PropTypes from "prop-types";

const MovieCard = (props) => {
    const [isEditMovieOpen, setIsEditMovieOpen] = useState(false);
    const [isDeleteMovieOpen, setIsDeleteMovieOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { setSelectedMovie } = useContext(MovieContext);

    const showOrHideEditMovie = useCallback((isOpen) => {
        setIsEditMovieOpen(isOpen);
        setBodyStyleOverflow(isOpen);
        setIsPopupOpen(false);
    }, [isEditMovieOpen, isPopupOpen]);

    const showOrHideDeleteMovie = useCallback((isOpen) => {
        setIsDeleteMovieOpen(isOpen);
        setBodyStyleOverflow(isOpen);
        setIsPopupOpen(false);
    }, [isDeleteMovieOpen, isPopupOpen]);

    const setBodyStyleOverflow = (isOpen) => {
        document.body.style.overflow = (isOpen) ? 'hidden' : 'unset';
    };

    const openEditMovieModal = () => {
        showOrHideEditMovie(true);
    }

    const openDeleteMovieModal = () => {
        showOrHideDeleteMovie(true);
    }

    const showOrHideMovieOptions = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    const getMovieGenre = (movieGenres) => {
        return movieGenres.map(genre => genre.name).join(", ");
    }

    const getMovieYear = (movieReleaseDate) => {
        const date = movieReleaseDate.split('-');
        return date[0];
    }

    const showMovieDetails = () => {
        setSelectedMovie(props.movie);
        window.scrollTo(0, 0);
    }

    const { title, movieUrl, release_date, genres } = props.movie;

    return (
        <div className="movie-card">
            <div className="movie-image">
                <img src={movieUrl} alt={title} onClick={showMovieDetails} />
            </div>
            <div className="movie-options">
                <span className="movie-options-icon" onClick={showOrHideMovieOptions}>
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </span>
                <Popup
                    showOrHideMovieOptions={showOrHideMovieOptions}
                    isPopupOpened={isPopupOpen}
                    openEditMovieModal={openEditMovieModal}
                    openDeleteMovieModal={openDeleteMovieModal}
                />
            </div>
            <div className="movie-details">
                <div className="movie-info">
                    <p className="movie-title">{title}</p>
                    <span className="movie-year">{getMovieYear(release_date)}</span>
                </div>
                <p className="movie-genre">{getMovieGenre(genres)}</p>
            </div>
            <>
                <EditMovieModal
                    onClose={showOrHideEditMovie}
                    show={isEditMovieOpen}
                    currentMovie={props.movie} />
                <DeleteMovieModal
                    onClose={showOrHideDeleteMovie}
                    show={isDeleteMovieOpen} />
            </>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        movieUrl: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
    }).isRequired
};

export default MovieCard;