import React, { useState } from "react";
import PropTypes from "prop-types";
import { Multiselect } from "multiselect-react-dropdown";

import "./MovieForm.scss";

const MovieForm = (props) => {
    const genresArray = [
        { id: 1, name: "Comedy" },
        { id: 2, name: "Adventure" },
        { id: 3, name: "Action" },
        { id: 4, name: "Romance" },
        { id: 5, name: "Science Fiction" },
        { id: 6, name: "Drama" },
        { id: 7, name: "Fantasy" }
    ];

    const styles = {
        chips: { background: "#f65261" },
        searchBox: { border: "none", background: "#555555", height: "45px", boxSizing: "border-box" },
        inputField: { background: "none" },
        option: { color: "#424242" }
    };

    const [genreOptions] = useState(genresArray);
    const [multiselectStyles] = useState(styles);
    const { id, title, movieUrl, genres, release_date, overview, runtime } = props.movie;

    return (
        <form>
            {id && (
                <div className="form-control">
                    <label>MOVIE ID</label>
                    <input type="text" className="movie-id" value={id} disabled />
                </div>
            )
            }
            <div className="form-control">
                <label>TITLE</label>
                <input type="text" placeholder="Movie Title" value={title} />
            </div>
            <div className="form-control">
                <label>RELEASE DATE</label>
                <input type="date" placeholder="Select Date" value={release_date} />
            </div>
            <div className="form-control">
                <label>MOVIE URL</label>
                <input type="text" placeholder="Movie Url" value={movieUrl} />
            </div>
            <div className="form-control">
                <label>GENRE</label>
                <div className="movie-genre-container">
                    <Multiselect
                        options={genreOptions}
                        displayValue="name"
                        selectedValues={genres}
                        placeholder="Select Genre"
                        style={multiselectStyles}
                        closeIcon="cancel"
                    />
                </div>
            </div>
            <div className="form-control">
                <label>OVERVIEW</label>
                <input type="text" placeholder="Movie Overview" value={overview} />
            </div>
            <div className="form-control">
                <label>RUNTIME</label>
                <input type="text" placeholder="Movie Runtime" value={runtime} />
            </div>
        </form>
    );
};

export default MovieForm;

MovieForm.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        movieUrl: PropTypes.string,
        release_date: PropTypes.string,
        overview: PropTypes.string,
        runtime: PropTypes.string,
        genres: PropTypes.array,
    })
};

MovieForm.defaultProps = {
    movie: {
        title: "",
        movieUrl: "",
        release_date: "",
        overview: "",
        runtime: "",
        genres: []
    }
};
