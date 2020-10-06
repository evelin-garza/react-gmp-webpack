import React, { useState, useCallback } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Popup from "../Shared/Popup/Popup";
import EditMovieModal from "../../components/EditMovieModal/EditMovieModal";
import DeleteMovieModal from "../../components/DeleteMovieModal/DeleteMovieModal";
import * as movieActions from "../../actions/movieActions";

import "./MovieCard.scss";
import { useHistory } from "react-router";

const MovieCard = (props) => {
    const [isEditMovieOpen, setIsEditMovieOpen] = useState(false);
    const [isDeleteMovieOpen, setIsDeleteMovieOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const history = useHistory();
    const { id, title, poster_path, release_date, genres } = props.movie;

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

    const closeEditMovieModal = () => {
        showOrHideEditMovie(false);
    }

    const openDeleteMovieModal = () => {
        showOrHideDeleteMovie(true);
    }

    const closeDeleteMovieModal = () => {
        showOrHideDeleteMovie(false);
    }

    const showOrHideMovieOptions = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    const getMovieGenre = (movieGenres) => {
        return movieGenres.join(", ");
    }

    const getMovieYear = (movieReleaseDate) => {
        const date = movieReleaseDate.split('-');
        return date[0];
    }

    const goToMovieDetails = () => {
        history.push('/film/' + id);
    }

    return (

        <div className="movie-card">
            <div className="movie-image">
                <img src={poster_path} alt={title} onClick={goToMovieDetails} onError={(e) => { e.target.onerror = null; e.target.src = "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg" }} />
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
                    onClose={closeEditMovieModal}
                    show={isEditMovieOpen}
                    currentMovie={props.movie} />
                <DeleteMovieModal
                    onClose={closeDeleteMovieModal}
                    show={isDeleteMovieOpen}
                    movie={props.movie} />
            </>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        runtime: PropTypes.number,
        genres: PropTypes.array.isRequired,
    }).isRequired
};

const mapDispatcherToProps = (dispatch) => {
    return {
        getMovieById: (movieId) => dispatch(movieActions.findMovieById(movieId))
    }
}

export default connect(null, mapDispatcherToProps)(MovieCard);