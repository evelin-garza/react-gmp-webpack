import React, { Component } from "react";
import PropTypes from "prop-types";
import { Multiselect } from "multiselect-react-dropdown";

import "./MovieForm.scss";

export default class MovieForm extends Component {
    state = {
        genreOptions: [
            { id: 1, name: "Comedy" },
            { id: 2, name: "Adventure" },
            { id: 3, name: "Action" },
            { id: 4, name: "Romance" },
            { id: 5, name: "Science Fiction" },
            { id: 6, name: "Drama" },
            { id: 7, name: "Fantasy" }
        ],
        multiselectStyles: {
            chips: { background: "#f65261" },
            searchBox: { border: "none", background: "#555555", height: "45px", boxSizing: "border-box" },
            inputField: { background: "none" },
            option: { color: "#424242" }
        }
    };

    render() {
        const { id, title, movieUrl, genres, release_date, overview, runtime } = this.props.movie;
        const { genreOptions, multiselectStyles } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
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
    }
}

MovieForm.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        movieUrl: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
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
