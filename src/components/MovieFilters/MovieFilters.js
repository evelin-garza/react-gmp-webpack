import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import * as movieActions from "../../actions/movieActions";

import "./MovieFilter.scss";

const MovieFilters = (props) => {
    const sortValues = [
        { value: 'id', label: 'Movie ID' },
        { value: 'release_date', label: 'Release Date' },
        { value: 'vote_average', label: 'Rating' }
    ];

    const genresArray = [
        'All',
        'Romance',
        'Animation',
        'Adventure',
        'Family',
        'Comedy',
        'Fantasy',
        'Action',
        'Drama'
    ];

    const [sortArray] = useState(sortValues);
    const [filters] = useState(genresArray);

    const onSortChange = (event) => {
        const value = event.target.value;
        props.sortBy(value, props.genreFilter);
    };

    const onGenreSelect = (event) => {
        const option = event.target.innerText.toLowerCase();
        props.filterByGenre(option);
    };


    const sortBy = 'release_date';

    return (
        <div className="movie-filters container">
            <div className="categories">
                {filters.length &&
                    filters.map((filter, index) => (
                        <button key={index} onClick={onGenreSelect} className={(filter.toLowerCase() == props.genreFilter) ? 'active' : ''}>{filter}</button>
                    ))}
            </div>
            <div className="sorting">
                <span>SORT BY </span>
                <div className="select-sort-container">
                    <select defaultValue={sortBy} onChange={onSortChange}>
                        {sortArray.length &&
                            sortArray.map((sortItem, index) => (
                                <option key={index} value={sortItem.value}>{sortItem.label}</option>
                            ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

MovieFilters.propTypes = {
    genreFilter: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {
        genreFilter: state.genreFilter
    };
}

const mapDispatcherToProps = (dispatch) => {
    return {
        sortBy: (sortBy, genre) => dispatch(movieActions.getMovies('', sortBy, genre)),
        filterByGenre: (genre) => dispatch(movieActions.getMoviesByGenre(genre))
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(MovieFilters);
