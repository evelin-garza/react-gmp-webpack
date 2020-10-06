import { MoviesActions } from '../actions/actionTypes';
import initialState from './initialState';

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MoviesActions.LIST:
            return { ...state, movies: action.movies, search: action.search, sortBy: action.sortBy, genreFilter: action.genre, message: action.msg };
        case MoviesActions.GET_BY_ID:
            return { ...state, selectedMovie: action.movie };
        case MoviesActions.CREATE:
            return { ...state, movies: action.movies };
        case MoviesActions.UPDATE:
            return { ...state, movies: action.movies };
        case MoviesActions.DELETE:
            return { ...state, movies: action.movies };
        case MoviesActions.CLEAR_SELECTED:
            return { ...state, selectedMovie: null };
        case MoviesActions.CLEAR_MESSAGE:
            return { ...state, message: null };
        default:
            return state;
    }
};

export default movieReducer;
