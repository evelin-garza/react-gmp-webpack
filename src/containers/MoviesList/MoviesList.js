import React, { Component } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import mockData from "../../../public/assets/data.json";

import "./MoviesList.scss";

export default class MoviesList extends Component {
    state = {
        moviesList: []
    };

    componentDidMount() {
        this.setState({ moviesList: mockData });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sortBy !== this.props.sortBy) {
            this.applySort();
        }
    }

    applySort = () => {
        console.log('applySort: ' + props.sortBy);
        this.setState({ moviesList: this.state.moviesList.sort(this.sortByProperty(props.sortBy)) });
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
        return (
            <div className="movies-container" >
                <p className="movies-results"><b>{movies.length}</b> movies found</p>
                <div className="movies-list">
                    {movies.length &&
                        movies.map((movie, index) => (
                            <MovieCard
                                key={`${movie.title}-${index}`}
                                movie={movie} />
                        ))}
                </div>
            </div>
        );
    }
}

