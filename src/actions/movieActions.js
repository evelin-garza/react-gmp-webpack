import MovieApi from '../api/movieApi';
import * as types from './actionTypes';

export const getMovies = (msg = '', sortBy = 'release_date', genre = 'all') => {
    return async (dispatch) => {
        return MovieApi.getMovies(sortBy, genre).then(movies => {
            dispatch(moviesList(movies, msg));
        }).catch(error => {
            throw (error);
        });
    };
}

export const getMoviesByGenre = (genre = '') => {
    return async (dispatch) => {
        return MovieApi.getMoviesByGenre(genre).then(movies => {
            dispatch(filterMovies(movies, genre));
        }).catch(error => {
            throw (error);
        });
    };
}

export const findMovieById = (id) => {
    return async (dispatch) => {
        return MovieApi.getMovieById(id).then(movie => {
            dispatch(getMovieById(movie));
        }).catch(error => {
            throw (error);
        });
    };
}

export const addMovie = (movie) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };

    return async (dispatch) => {
        return MovieApi.addMovie(options).then(msg => {
            dispatch(getMovies(msg));
        }).catch(error => {
            throw (error);
        });
    };
}

export const editMovie = (movie) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };

    return async (dispatch) => {
        return MovieApi.editMovie(options).then(msg => {
            dispatch(getMovies(msg));
        }).catch(error => {
            throw (error);
        });
    };
}

export const deleteMovie = (id) => {
    const options = {
        method: 'DELETE'
    };

    return async (dispatch) => {
        return MovieApi.deleteMovie(id, options).then(msg => {
            dispatch(getMovies(msg));
        }).catch(error => {
            throw (error);
        });
    };
}

export const moviesList = (movies, msg = '') => {
    return { type: types.GET_MOVIES, movies, msg };
}

export const filterMovies = (movies, genre) => {
    return { type: types.GET_MOVIES_BY_GENRE, movies, genre };
}

export const getMovieById = (movie) => {
    return { type: types.GET_MOVIE_BY_ID, movie };
}

export const clearSelectedMovie = () => {
    return { type: types.CLEAR_SELECTED_MOVIE };
}

export const clearMessage = () => {
    return { type: types.CLEAR_MESSAGE };
}
