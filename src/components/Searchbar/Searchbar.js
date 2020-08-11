import React from "react";

import "./Searchbar.scss";

const Searchbar = () => {
    return (
        <div className="searchbar">
            <input type="text" className="search-input" placeholder="What do you want to watch?" />
            <button className="btn-search">SEARCH</button>
        </div>
    );
};

export default Searchbar;