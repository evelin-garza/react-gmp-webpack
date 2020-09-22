import * as types from '../actions/actionTypes';
import initialState from './initialState';

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MOVIES:
            return { ...state, movies: action.movies, message: action.msg };
        case types.GET_MOVIES_BY_GENRE:
            return { ...state, movies: action.movies, genreFilter: action.genre };
        case types.GET_MOVIE_BY_ID:
            return { ...state, selectedMovie: action.movie };
        case types.CLEAR_SELECTED_MOVIE:
            return { ...state, selectedMovie: null };
        case types.ADD_MOVIE:
            return { ...state, movies: action.movies };
        case types.EDIT_MOVIE:
            return { ...state, movies: action.movies };
        case types.DELETE_MOVIE:
            return { ...state, movies: action.movies };
        case types.CLEAR_MESSAGE:
            return { ...state, message: null };
        default:
            return state;
    }
};

export default movieReducer;
