import { Endpoints } from "../constants/endpoints";

export default class MovieApi {
    static async getMovies(sortBy = 'release_date', genre = 'all') {
        const filterQueryParams = (genre !== 'all') ? `searchBy=genres&search=${genre}` : '';
        const moviesUrl = `${Endpoints.serverUrl}${Endpoints.movies}?sortBy=${sortBy}&sortOrder=desc${filterQueryParams}`;
        const response = await fetch(moviesUrl);
        const json = await response.json();
        return json.data;
    }

    static async getMoviesByGenre(genre = 'all') {
        const filterQueryParams = (genre !== 'all') ? `searchBy=genres&search=${genre}` : '';
        const moviesUrl = `${Endpoints.serverUrl}${Endpoints.movies}?${filterQueryParams}`;
        const response = await fetch(moviesUrl);
        const json = await response.json();
        return json.data;
    }

    static async getMovieById(movieId) {
        const moviesUrl = `${Endpoints.serverUrl}${Endpoints.movies}`;
        const response = await fetch(`${moviesUrl}/${movieId}`);
        const json = await response.json();
        return json;
    }

    static async addMovie(options) {
        const moviesUrl = `${Endpoints.serverUrl}${Endpoints.movies}`;
        const response = await fetch(moviesUrl, options);
        const msg = response.status === 201
            ? 'Movie added successfully'
            : 'There was an error while creating the movie, please try again.';
        return msg;
    }

    static async editMovie(options) {
        const moviesUrl = `${Endpoints.serverUrl}${Endpoints.movies}`;
        const response = await fetch(moviesUrl, options);
        const msg = response.status === 200
            ? 'Movie updated successfully'
            : 'There was an error while updating the movie, please try again.';

        return msg;
    }

    static async deleteMovie(movieId, options) {
        const moviesUrl = `${Endpoints.serverUrl}${Endpoints.movies}`;
        const response = await fetch(`${moviesUrl}/${movieId}`, options);
        const msg = response.status === 204
            ? 'Movie deleted successfully'
            : 'There was an error while deleting the movie, please try again.';
        return msg;
    }
}
