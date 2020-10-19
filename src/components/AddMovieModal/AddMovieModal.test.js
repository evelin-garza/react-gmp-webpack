import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime.js';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import React from "react";
import configureMockStore from 'redux-mock-store';

import AddMovieModal from './AddMovieModal';
import { Provider } from 'react-redux';

const mockProps = {
    onClose: jest.fn(),
    show: true,
};

const mockStore = configureMockStore([]);
const store = mockStore({});

const renderComponent = () => {
    render(
        <Provider store={store}>
            <AddMovieModal {
                ...mockProps
            } />
        </Provider>
    );
};

describe('AddMovieModal Component', () => {
    it('should render component', () => {
        renderComponent();
        const modalTitle = screen.getByText('ADD MOVIE');
        expect(modalTitle).toBeTruthy();
    });

    it('should call onClose when click on close button', async () => {
        renderComponent();
        const closeButton = screen.getByRole('close');
        await userEvent.click(closeButton);
        expect(mockProps.onClose).toHaveBeenCalledTimes(1);
    });
});