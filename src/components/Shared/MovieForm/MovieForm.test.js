import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime.js';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import React from "react";
import configureMockStore from 'redux-mock-store';

import { Provider } from 'react-redux';
import MovieForm from './MovieForm';

const mockProps = {
    onClose: jest.fn(),
    mode: 'add',
};

const mockMovie = {
    id: 1,
    title: 'Movie Test',
    poster_path: 'https://www.movietesturl.com',
    release_date: '2016-04-05',
    overview: 'Movie test overview',
    runtime: 120,
    genres: ['Action']
};

const mockStore = configureMockStore([]);
const store = mockStore({});

const renderComponent = (props) => {
    store.dispatch = jest.fn();
    return render(
        <Provider store={store}>
            <MovieForm {
                ...props
            } />
        </Provider>
    );
};

describe('MovieForm Component', () => {
    it('should not dispatch addMovie when there are empty required inputs', () => {
        renderComponent(mockProps);

        userEvent.click(screen.getByDisplayValue('SUBMIT'));
        expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('should not render movieId input when mode is AddMovie', () => {
        renderComponent(mockProps);

        const movieIdInput = document.querySelector('input[name="id"]');
        expect(movieIdInput).toBeNull();
    });

    it('should render movieId input when mode is EditMovie', () => {
        mockProps.mode = 'edit';
        mockProps.movie = mockMovie;

        renderComponent(mockProps);

        const movieIdInput = document.querySelector('input[name="id"]');
        expect(movieIdInput).toBeInTheDocument();
    });

    it('should dispatch addMovie when all inputs are filled', async () => {
        const { getByPlaceholderText } = renderComponent(mockProps);

        userEvent.type(getByPlaceholderText('Movie Title'), mockMovie.title);
        userEvent.type(getByPlaceholderText('Select Date'), mockMovie.release_date);
        userEvent.type(getByPlaceholderText('Movie Url'), mockMovie.poster_path);
        userEvent.selectOptions(document.querySelector('select[name="genres"]'), mockMovie.genres);
        userEvent.type(getByPlaceholderText('Movie Overview'), mockMovie.overview);
        userEvent.type(getByPlaceholderText('Movie Runtime'), mockMovie.runtime.toString());

        userEvent.click(screen.getByDisplayValue('SUBMIT'));

        await waitFor(() => {
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(mockProps.onClose).toHaveBeenCalledTimes(1);
        });
    });
    it('should dispatch editMovie when click on submit', async () => {
        mockProps.mode = 'edit';
        mockProps.movie = mockMovie;

        renderComponent(mockProps);

        userEvent.click(screen.getByDisplayValue('SUBMIT'));

        await waitFor(() => {
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(mockProps.onClose).toHaveBeenCalledTimes(1);
        });
    });
});