import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Formik, useField, Form } from 'formik';

import "./MovieForm.scss";
import * as movieActions from "../../../actions/movieActions";

const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="form-control">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field}{...props} className={(meta.touched && meta.error) ? 'error' : ''} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
};

const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="form-control">
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field}{...props} className={(meta.touched && meta.error) ? 'error' : ''} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
};

const CustomTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="form-control">
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea {...field}{...props} className={(meta.touched && meta.error) ? 'error' : ''} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
};

const MovieForm = (props) => {
    const { initialValues, movie, validationSchema, mode, addMovie, editMovie, onClose } = props;

    const genresArray = [
        "Romance",
        "Animation",
        "Adventure",
        "Family",
        "Comedy",
        "Fantasy",
        "Science Fiction",
        "Action",
        "Drama"
    ];

    return (
        <Formik
            initialValues={initialValues || movie}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                if (mode === 'add') {
                    addMovie(values);
                } else {
                    editMovie(values);
                }
                onClose();
            }}
        >
            {props => (
                <Form>
                    {movie && movie.id && (
                        <CustomTextInput label="Id" name="id" type="text" disabled />
                    )}
                    <CustomTextInput label="Title" name="title" type="text" placeholder="Movie Title" />
                    <CustomTextInput label="Release Date" name="release_date" type="date" placeholder="Select Date" />
                    <CustomTextInput label="Movie URL" name="poster_path" type="text" placeholder="Movie Url" />
                    <CustomSelect label="Genre" name="genres" multiple>
                        {genresArray.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </CustomSelect>
                    <CustomTextarea label="Overview" name="overview" placeholder="Movie Overview" rows="1" />
                    <CustomTextInput label="Runtime" name="runtime" type="number" placeholder="Movie Runtime" />
                    <div className="form-actions">
                        <input type="button" className="btn btn-red-outline" value="RESET" onClick={props.resetForm} />
                        <input type="submit" className="btn btn-filled-red" value="SUBMIT" disabled={props.isSubmiting} />
                    </div>
                </Form>
            )}

        </Formik>
    );
};

MovieForm.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        overview: PropTypes.string,
        runtime: PropTypes.number,
        genres: PropTypes.array,
        vote_average: PropTypes.number
    }),
    mode: PropTypes.string,
    onClose: PropTypes.func
};

MovieForm.defaultProps = {
    movie: {
        title: "",
        poster_path: "",
        release_date: "",
        overview: "",
        runtime: 0,
        genres: [],
        vote_average: 0
    }
};

const mapDispatcherToProps = (dispatch) => {
    return {
        addMovie: (movie) => dispatch(movieActions.addMovie(movie)),
        editMovie: (movie) => dispatch(movieActions.editMovie(movie))
    }
}

export default connect(null, mapDispatcherToProps)(MovieForm);
