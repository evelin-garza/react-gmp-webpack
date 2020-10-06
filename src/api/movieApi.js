import { Endpoints } from "../constants/endpoints";

export default class MovieApi {
    static async getMovies(search, sortBy, filter, sortOrder = 'desc') {
        let queryParams = `?search=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
        if (filter && filter !== 'all') {
            queryParams += `&searchBy=genres&filter=${filter}`;
        } else {
            queryParams += `&searchBy=title`;
        }
        const moviesUrl = `${Endpoints.serverUrl}${Endpoints.movies}${queryParams}`;
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
