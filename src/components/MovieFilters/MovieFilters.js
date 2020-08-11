import React from "react";

import "./MovieFilter.scss";

const MovieFilters = () => {
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
                <span className="select">RELEASE DATE</span>
            </div>
        </div>
    );
};

export default MovieFilters;