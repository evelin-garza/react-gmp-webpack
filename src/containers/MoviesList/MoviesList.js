import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import MovieCard from "../../components/MovieCard/MovieCard";

import "./MoviesList.scss";
import Loader from "../../components/Shared/Loader/Loader";
import * as movieActions from "../../actions/movieActions";

const MoviesList = ({ movies, message, clearMessage }) => {
    return (
        <div className="movies-container">
            {message && (
                <div className="message-container">
                    <span>{message}</span>
                    <button className="close" onClick={() => clearMessage()}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
            )}
            {movies.length > 0 && (
                <p className="movies-results"><b>{movies.length}</b> movies found</p>
            )}
            {movies.length == 0 && (
                <div className="no-results">No Movie Found</div>
            )}
            <div className="movies-list">
                {movies.length > 0 &&
                    movies.map((movie, index) => (
                        <MovieCard
                            key={`${movie.title}-${index}`}
                            movie={movie} />
                    ))}
            </div>
        </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    message: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies,
        message: state.message
    };
}

const mapDispatcherToProps = (dispatch) => {
    return {
        clearMessage: () => dispatch(movieActions.clearMessage())
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(MoviesList);
