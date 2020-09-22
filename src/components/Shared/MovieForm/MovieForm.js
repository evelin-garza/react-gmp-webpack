import React, { useState } from "react";
import PropTypes from "prop-types";
import { Multiselect } from "multiselect-react-dropdown";
import { connect } from 'react-redux';

import "./MovieForm.scss";
import * as movieActions from "../../../actions/movieActions";

const MovieForm = (props) => {
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

    const styles = {
        chips: { background: "#f65261" },
        searchBox: { border: "none", background: "#555555", height: "45px", boxSizing: "border-box" },
        inputField: { background: "none" },
        option: { color: "#424242" }
    };

    const [genreOptions] = useState(genresArray);
    const [multiselectStyles] = useState(styles);
    const [movieDataForm, setMovieDataForm] = useState({ ...props.movie });

    const multiselectRef = React.createRef();

    const onInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = (name === 'runtime') ? parseInt(target.value) : target.value;

        var movieDataFormCopy = movieDataForm;
        movieDataFormCopy[name] = value;
        setMovieDataForm(movieDataFormCopy);
    }

    const onSelectGenre = (values) => {
        var movieDataFormCopy = movieDataForm;
        movieDataFormCopy['genres'] = values;
        setMovieDataForm(movieDataFormCopy);
    }

    const resetGenres = () => {
        multiselectRef.current.resetSelectedValues();
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (props.mode === 'add') {
            props.addMovie(movieDataForm);
        } else {
            props.editMovie(movieDataForm);
        }
        props.onClose();
    }

    return (
        <form onSubmit={onSubmit}>
            {movieDataForm.id && (
                <div className="form-control">
                    <label>MOVIE ID</label>
                    <input type="text" className="movie-id" value={movieDataForm.id} disabled />
                </div>
            )
            }
            <div className="form-control">
                <label>TITLE</label>
                <input name="title" type="text" placeholder="Movie Title" defaultValue={movieDataForm.title} onChange={onInputChange} required />
            </div>
            <div className="form-control">
                <label>RELEASE DATE</label>
                <input name="release_date" type="date" placeholder="Select Date" defaultValue={movieDataForm.release_date} onChange={onInputChange} required />
            </div>
            <div className="form-control">
                <label>MOVIE URL</label>
                <input name="poster_path" type="text" placeholder="Movie Url" defaultValue={movieDataForm.poster_path} onChange={onInputChange} required />
            </div>
            <div className="form-control">
                <label>GENRE</label>
                <div className="movie-genre-container">
                    <Multiselect
                        options={genreOptions}
                        isObject={false}
                        selectedValues={movieDataForm.genres}
                        placeholder="Select Genre"
                        style={multiselectStyles}
                        closeIcon="cancel"
                        onSelect={onSelectGenre}
                        onRemove={onSelectGenre}
                        ref={multiselectRef}
                    />
                </div>
            </div>
            <div className="form-control">
                <label>OVERVIEW</label>
                <textarea name="overview" placeholder="Movie Overview" defaultValue={movieDataForm.overview} onChange={onInputChange} rows="2" required></textarea>
            </div>
            <div className="form-control">
                <label>RUNTIME</label>
                <input name="runtime" type="number" placeholder="Movie Runtime" defaultValue={movieDataForm.runtime} onChange={onInputChange} required />
            </div>
            <div className="form-actions">
                <input type="reset" className="btn btn-red-outline" value="RESET" onClick={resetGenres} />
                <input type="submit" className="btn btn-filled-red" value="SUBMIT" />
            </div>
        </form>
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
