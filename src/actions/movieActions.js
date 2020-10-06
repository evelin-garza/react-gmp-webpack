import MovieApi from '../api/movieApi';
import { MoviesActions } from './actionTypes';

export const getMovies = (search, sortBy, genre, msg = '') => {
    return async (dispatch) => {
        return MovieApi.getMovies(search, sortBy, genre).then(movies => {
            dispatch(moviesList(movies, search, sortBy, genre, msg));
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

    return async (dispatch, getState) => {
        const { search, sortBy, genre } = getState();

        return MovieApi.addMovie(options).then(msg => {
            dispatch(getMovies(search, sortBy, genre, msg));
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

    return async (dispatch, getState) => {
        const { search, sortBy, genre } = getState();

        return MovieApi.editMovie(options).then(msg => {
            dispatch(getMovies(search, sortBy, genre, msg));
        }).catch(error => {
            throw (error);
        });
    };
}

export const deleteMovie = (id) => {
    const options = {
        method: 'DELETE'
    };

    return async (dispatch, getState) => {
        const { search, sortBy, genre } = getState();

        return MovieApi.deleteMovie(id, options).then(msg => {
            dispatch(getMovies(search, sortBy, genre, msg));
        }).catch(error => {
            throw (error);
        });
    };
}

export const moviesList = (movies, search, sortBy, genre, msg) => {
    return { type: MoviesActions.LIST, movies, search, sortBy, genre, msg };
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
