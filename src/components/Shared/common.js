import * as Yup from 'yup';

export const ADD_MOVIE_INITIAL_VALUES = {
    title: '',
    release_date: '',
    poster_path: '',
    overview: '',
    runtime: 0,
    genres: []
};

export const MOVIE_VALIDATION = {
    title: Yup.string().required('This field is required!'),
    release_date: Yup.date().required('This field is required!'),
    poster_path: Yup.string().url('Insert a valid url').required('This field is required!'),
    overview: Yup.string().required('This field is required!'),
    runtime: Yup.number().min(0, 'Can not insert negative values').required('This field is required!'),
    genres: Yup.array().of(Yup.string()).ensure().required('This field is required!')
};

export const ADD_MOVIE_VALIDATION_SCHEMA = Yup.object().shape(MOVIE_VALIDATION);

export const EDIT_MOVIE_VALIDATION_SCHEMA = Yup.object().shape({
    ...MOVIE_VALIDATION,
    id: Yup.number().required('This field is required!')
});
