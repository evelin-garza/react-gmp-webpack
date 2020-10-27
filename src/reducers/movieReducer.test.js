import movieReducer from './movieReducer'
import initialState from './initialState';
import { MoviesActions } from '../actions/actionTypes';

const mockMovies = [{
    id: 1,
    title: 'Movie Test',
    poster_path: 'https://www.movietesturl.com',
    release_date: '2016-04-05',
    overview: 'Movie test overview',
    runtime: 120,
    genres: ['Action']
}];

describe('movieReducer', () => {
    it('should handle default option', () => {
        expect(movieReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle movies/list', () => {
        const state = movieReducer(undefined, {
            type: MoviesActions.LIST,
            movies: mockMovies
        });

        expect(state.movies).toEqual(mockMovies);
    });

    it('should handle movies/getById', () => {
        const state = movieReducer(undefined, {
            type: MoviesActions.GET_BY_ID,
            movie: mockMovies[0]
        });

        expect(state.selectedMovie).toEqual(mockMovies[0]);
    });

    it('should handle movies/create', () => {
        const state = movieReducer(undefined, {
            type: MoviesActions.CREATE,
            movies: mockMovies
        });

        expect(state.movies).toEqual(mockMovies);
    });

    it('should handle movies/update', () => {
        const mockMovie = mockMovies[0];
        mockMovie.title = 'Movie updated';
        const state = movieReducer(
            {
                ...initialState,
                movies: mockMovies
            },
            {
                type: MoviesActions.UPDATE,
                movies: [mockMovie],
            }
        );

        expect(state.movies).toEqual([mockMovie]);
    });

    it('should handle movies/delete', () => {
        const state = movieReducer(
            {
                ...initialState,
                movies: mockMovies
            },
            {
                type: MoviesActions.DELETE,
                movies: [],
            }
        );

        expect(state.movies.length).toEqual(0);
    });

    it('should handle movies/clearSelected', () => {
        const state = movieReducer(
            {
                ...initialState,
                selectedMovie: mockMovies[0]
            },
            {
                type: MoviesActions.CLEAR_SELECTED
            }
        );

        expect(state.selectedMovie).toBeNull();
    });

    it('should handle movies/clearMessage', () => {
        const state = movieReducer(
            {
                ...initialState,
                message: 'Message'
            },
            {
                type: MoviesActions.CLEAR_MESSAGE
            }
        );

        expect(state.message).toBeNull();
    });
});
