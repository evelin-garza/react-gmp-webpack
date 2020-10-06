import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useParams, useHistory } from "react-router";

import "./MovieDetails.scss";
import Logo from "../../components/Logo/Logo";
import * as movieActions from "../../actions/movieActions";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Shared/Loader/Loader";

const MovieDetails = ({ getMovieById, selectedMovie, onCloseMovieDetails }) => {
    const history = useHistory();

    const getMovieYear = (movieReleaseDate) => {
        return movieReleaseDate.slice(0, 4);
    };

    const goBack = () => {
        onCloseMovieDetails();
        history.goBack();
    };

    const { id } = useParams();

    useEffect(() => {
        getMovieById(id);
    }, []);

    return (
        <div className="movie-details-container">
            <div className="topbar">
                <div className="container">
                    <Logo />
                    <span className="search-icon" onClick={goBack}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div className="container">
                {selectedMovie && Object.keys(selectedMovie).length > 0 ?
                    <div className="movie-content">
                        <img alt={selectedMovie.title} src={selectedMovie.poster_path} />
                        <div className="info">
                            <div className="row">
                                <span className="title">{selectedMovie.title}</span>
                                <span className="rating">{selectedMovie.vote_average}</span>
                            </div>

                            <div className="row">
                                <span className="release-date">{getMovieYear(selectedMovie.release_date)}</span>
                                <span className="duration">{selectedMovie.runtime} min</span>
                            </div>

                            <p className="description">
                                {selectedMovie.overview}
                            </p>
                        </div>
                    </div>
                    :
                    <Loader />
                }
            </div>
            <Footer><Logo /></Footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    };
};

const mapDispatcherToProps = (dispatch) => {
    return {
        getMovieById: (movieId) => dispatch(movieActions.findMovieById(movieId)),
        onCloseMovieDetails: () => dispatch(movieActions.clearSelectedMovie())
    }
};

export default connect(mapStateToProps, mapDispatcherToProps)(MovieDetails);