import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from '../reducers/movieReducer';

const configureStore = () => {
    return createStore(
        movieReducer,
        applyMiddleware(thunk)
    );
};

export default configureStore;