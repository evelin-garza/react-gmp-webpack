import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as movieActions from "../../actions/movieActions";
import "./Searchbar.scss";

const Searchbar = (props) => {
    const query = new URLSearchParams(useLocation().search);
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();

    const { genreFilter, sortBy } = props;

    const handleOnChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleOnKeyDown = (event) => {
        const value = event.target.value;
        if (value.trim().length > 0 && event.key == 'Enter') {
            search();
        }
    };

    const search = () => {
        if (location.pathname !== 'search') {
            history.push('/search?search=' + searchQuery);
        }
        props.searchMovies(searchQuery, sortBy, genreFilter);
    };

    useEffect(() => {
        const searchKeyword = query.get('search');
        if (searchKeyword) {
            setSearchQuery(searchKeyword);
            props.searchMovies(searchKeyword, sortBy, genreFilter);
        }
    }, []);

    return (
        <div className="searchbar">
            <input type="text"
                defaultValue={searchQuery}
                onKeyDown={handleOnKeyDown}
                onChange={handleOnChange}
                className="search-input"
                placeholder="What do you want to watch?" />
            <button className="btn-search" onClick={search} disabled={!searchQuery}>SEARCH</button>
        </div>
    );
};

Searchbar.propTypes = {
    genreFilter: PropTypes.string,
    sortBy: PropTypes.string,
    search: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {
        genreFilter: state.genreFilter,
        sortBy: state.sortBy,
        search: state.search
    };
}

const mapDispatcherToProps = (dispatch) => {
    return {
        searchMovies: (search, sortBy, genreFilter) => dispatch(movieActions.getMovies(search, sortBy, genreFilter))
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Searchbar);