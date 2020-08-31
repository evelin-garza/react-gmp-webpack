import React, { Component } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import EditMovieModal from "../../components/EditMovieModal/EditMovieModal";
import DeleteMovieModal from "../../components/DeleteMovieModal/DeleteMovieModal";
import mockData from "../../../public/assets/data.json";
import PropTypes from "prop-types";

import "./MoviesList.scss";

export default class MoviesList extends Component {
    state = {
        currentMovie: {},
        moviesList: []
    };

    componentDidMount() {
        this.setState({ moviesList: mockData });
    }

    setCurrentMovie = (movie) => {
        this.setState({ currentMovie: movie });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sortBy !== this.props.sortBy) {
            this.applySort();
        }
    }

    applySort = () => {
        this.setState({ moviesList: this.state.moviesList.sort(this.sortByProperty(this.props.sortBy)) });
    }

    sortByProperty = (property) => {
        const customSort = (firstElement, secondElement) => {
            if (!firstElement.hasOwnProperty(property) || !secondElement.hasOwnProperty(property)) {
                return 0;
            }

            const firstValue = (typeof firstElement[property] === 'string') ?
                firstElement[property].toUpperCase() : firstElement[property];

            const secondValue = (typeof secondElement[property] === 'string') ?
                secondElement[property].toUpperCase() : secondElement[property];

            let result = 0;
            if (firstValue > secondValue) {
                result = 1;
            } else if (firstValue < secondValue) {
                result = -1;
            }
            return result;
        };

        return customSort;
    }

    render() {
        const movies = this.state.moviesList;
        const currentMovie = this.state.currentMovie;
        return (
            <div className="movies-container">
                <p className="movies-results"><b>{movies.length}</b> movies found</p>
                <div className="movies-list">
                    {movies.length &&
                        movies.map((movie, index) => (
                            <MovieCard
                                key={`${movie.title}-${index}`}
                                movie={movie}
                                showOrHideModal={this.props.showOrHideModal}
                                setCurrentMovie={this.setCurrentMovie} />
                        ))}
                </div>
                <>
                    <EditMovieModal
                        onClose={this.props.showOrHideModal}
                        show={this.props.isModalOpened && this.props.modalType === 'edit-movie'}
                        currentMovie={currentMovie} />
                    <DeleteMovieModal
                        onClose={this.props.showOrHideModal}
                        show={this.props.isModalOpened && this.props.modalType === 'delete-movie'} />
                </>
            </div>
        );
    }
}

MoviesList.propTypes = {
    isModalOpened: PropTypes.bool.isRequired,
    modalType: PropTypes.string.isRequired,
    showOrHideModal: PropTypes.func.isRequired
}
