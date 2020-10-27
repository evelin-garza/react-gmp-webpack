import configureMockStore from 'redux-mock-store';
import 'regenerator-runtime/runtime.js';
import thunk from 'redux-thunk';
import * as movieActions from './movieActions';
import { MoviesActions } from './actionTypes';

const mockMovie = {
    id: 1,
    title: 'Movie Test',
    poster_path: 'https://www.movietesturl.com',
    release_date: '2016-04-05',
    overview: 'Movie test overview',
    runtime: 120,
    genres: ['Action']
};

let mockResponse = {
    totalAmount: 1,
    data: [mockMovie],
};

let errorMsg = '';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('movieActions', () => {
    beforeEach(() => {

        global.fetch = jest.fn().mockImplementation(() => {
            const response = new Promise((resolve, reject) => {
                resolve({
                    json: () => mockResponse
                });
            });

            return response;
        });

    });

    it('should call getMovies function', async () => {
        store.dispatch(movieActions.getMovies()).then((res) => {
            expect(res).toEqual([mockMovie]);
        });
    });

    it('should call findMovieById function', async () => {
        mockResponse.data = mockMovie;

        store.dispatch(movieActions.findMovieById(mockMovie.id)).then((res) => {
            expect(res).toEqual(mockMovie);
        });
    });

    it('should call addMovie function', async () => {
        mockResponse.status = mockMovie;

        store.dispatch(movieActions.addMovie(mockMovie)).then((res) => {
            expect(res).toEqual(mockMovie);
        });
    });

    it('should call editMovie function', async () => {
        mockResponse = mockMovie;

        store.dispatch(movieActions.editMovie(mockMovie)).then((res) => {
            expect(res).toEqual(mockMovie);
        });
    });

    it('should call deleteMovie function', async () => {
        mockResponse = mockMovie;

        store.dispatch(movieActions.deleteMovie(mockMovie.id)).then((res) => {
            expect(res).toEqual(mockMovie);
        });
    });

    it('should create an action for moviesList', () => {
        const mockAction = {
            type: MoviesActions.LIST,
            movies: [],
            search: '',
            sortBy: '',
            genre: '',
            msg: ''
        };

        expect(movieActions.moviesList([], '', '', '', '')).toEqual(mockAction);
    });

    it('should create an action for getMovieById', () => {
        const mockAction = {
            type: MoviesActions.GET_BY_ID,
            movie: mockMovie
        };

        expect(movieActions.getMovieById(mockMovie)).toEqual(mockAction);
    });

    it('should create an action for clearSelectedMovie', () => {
        const mockAction = {
            type: MoviesActions.CLEAR_SELECTED
        };

        expect(movieActions.clearSelectedMovie()).toEqual(mockAction);
    });

    it('should create an action for clearMessage', () => {
        const mockAction = {
            type: MoviesActions.CLEAR_MESSAGE
        };

        expect(movieActions.clearMessage()).toEqual(mockAction);
    });
});

describe('movieActions Error', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve, reject) => {
                reject(errorMsg);
            });
        });
    });

    it('should throw error for getMovies function', async () => {
        errorMsg = 'Could not get movies';
        store.dispatch(movieActions.getMovies()).then((error) => {
            expect(error).toEqual(errorMsg);
        });
    });

    it('should throw error for findMovieById function', async () => {
        errorMsg = 'Movie not found';
        store.dispatch(movieActions.findMovieById(mockMovie.id)).then((error) => {
            expect(error).toEqual(errorMsg);
        });
    });

    it('should throw error for addMovie function', async () => {
        errorMsg = 'The movie could not be added';
        store.dispatch(movieActions.addMovie(mockMovie)).then((error) => {
            expect(error).toEqual(errorMsg);
        });
    });

    it('should throw error for editMovie function', async () => {
        errorMsg = 'The movie could not be updated';
        store.dispatch(movieActions.editMovie(mockMovie)).then((error) => {
            expect(error).toEqual(errorMsg);
        });
    });

    it('should throw error for deleteMovie function', async () => {
        errorMsg = 'The movie could not be deleted';
        store.dispatch(movieActions.deleteMovie(mockMovie.id)).then((error) => {
            expect(error).toEqual(errorMsg);
        });
    });
});
