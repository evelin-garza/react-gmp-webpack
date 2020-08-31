import React, { Component } from "react";

import "./MovieFilter.scss";

export default class MovieFilters extends Component {
    state = {
        sortArray: [
            { value: 'id', label: 'Movie ID' },
            { value: 'title', label: 'Movie Title' },
            { value: 'release_date', label: 'Release Date' }
        ]
    }

    onSortChange = (event) => {
        const value = event.target.value;
        this.props.setSortBy(value);
    };

    render() {
        const { sortBy } = this.props;
        const { sortArray } = this.state;

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
                        <select value={sortBy} onChange={this.onSortChange}>
                            {sortArray.length &&
                                sortArray.map((sortItem, index) => (
                                    <option key={index} value={sortItem.value}>{sortItem.label}</option>
                                ))}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
