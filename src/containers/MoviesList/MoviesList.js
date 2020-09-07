import React, { useEffect, useState, useRef } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import mockData from "../../../public/assets/data.json";

import "./MoviesList.scss";
import { useFetch } from "../../Hooks/Custom/useFetch";
import Loader from "../../components/Shared/Loader/Loader";

const MoviesList = ({ sortBy }) => {
    const [movies, setMovies] = useState(mockData);
    const isComponentMounted = useRef(true);

    const { data, loading } = useFetch(
        mockData,
        isComponentMounted,
        []
    );

    useEffect(() => { applySort(); }, [sortBy]);

    const applySort = () => {
        setMovies(movies.sort(sortByProperty(sortBy)));
    }

    const sortByProperty = (property) => {
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

    return (
        <div className="movies-container" >
            <p className="movies-results"><b>{data.length}</b> movies found</p>
            <div className="movies-list">
                {loading && (
                    <Loader />
                )}
                {!loading &&
                    data.map((movie, index) => (
                        <MovieCard
                            key={`${movie.title}-${index}`}
                            movie={movie} />
                    ))}
            </div>
        </div>
    );
};

export default MoviesList;

