import MovieApi from '../api/movieApi';
import { MoviesActions } from './actionTypes';

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
    return { type: MoviesActions.LIST, movies, msg };
}

export const filterMovies = (movies, genre) => {
    return { type: MoviesActions.GET_BY_GENRE, movies, genre };
}

export const getMovieById = (movie) => {
    return { type: MoviesActions.GET_BY_ID, movie };
}

export const clearSelectedMovie = () => {
    return { type: MoviesActions.CLEAR_SELECTED };
}

export const clearMessage = () => {
    return { type: MoviesActions.CLEAR_MESSAGE };
}
