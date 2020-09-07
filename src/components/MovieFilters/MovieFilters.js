import React, { useState } from "react";
import PropTypes from "prop-types";

import "./MovieFilter.scss";

const MovieFilters = (props) => {
    const sortValues = [
        { value: 'id', label: 'Movie ID' },
        { value: 'title', label: 'Movie Title' },
        { value: 'release_date', label: 'Release Date' }
    ];

    const [sortArray] = useState(sortValues);

    const onSortChange = (event) => {
        const value = event.target.value;
        props.setSortBy(value);
        console.log('onSortChange: ' + value);
    };


    const { sortBy } = props;

    return (
        <div className="movie-filters container">
            <div className="categories">
                <span className="active">ALL</span>
                <span>DOCUMENTARY</span>
                <span>COMEDY</span>
                <span>HORROR</span>
                <span>CRIME</span>
            </div>
            <div className="sorting">
                <span>SORT BY </span>
                <div className="select-sort-container">
                    <select value={sortBy} onChange={onSortChange}>
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
    setSortBy: PropTypes.func
};

export default MovieFilters;
