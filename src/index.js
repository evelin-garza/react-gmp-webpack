import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
import configureStore from './store/configureStore';
import { getMovies } from './actions/movieActions';
import "./global.scss";

const store = configureStore();
store.dispatch(getMovies());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);