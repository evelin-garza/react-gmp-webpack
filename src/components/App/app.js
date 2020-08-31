import React, { Component } from "react";
import Header from "../Header/Header";
import MoviesList from "../../containers/MoviesList/MoviesList";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import MovieFilters from "../../components/MovieFilters/MovieFilters";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

import "./App.scss";

export default class App extends Component {
    state = {
        isModalOpened: false,
        modalType: '',
        sortBy: ''
    };

    componentDidMount() {
        this.setState({
            sortBy: 'release_date'
        });
    }

    showOrHideModal = (isModalOpened, modalType = '') => {
        this.setState({
            isModalOpened,
            modalType
        });
        this.setBodyStyleOverflow(isModalOpened);
    }

    setBodyStyleOverflow = (isModalOpened) => {
        document.body.style.overflow = (isModalOpened) ? 'hidden' : 'unset';
    }

    setSortBy = (property) => {
        this.setState({
            sortBy: property
        });
    }

    render() {
        return (
            <>
                <Header
                    isModalOpened={this.state.isModalOpened}
                    modalType={this.state.modalType}
                    showOrHideModal={this.showOrHideModal} />
                <div className="content">
                    <MovieFilters
                        sortBy={this.state.sortBy}
                        setSortBy={this.setSortBy} />
                    <ErrorBoundary hasErrors={false}>
                        <MoviesList
                            isModalOpened={this.state.isModalOpened}
                            modalType={this.state.modalType}
                            showOrHideModal={this.showOrHideModal}
                            sortBy={this.state.sortBy} />
                    </ErrorBoundary>
                    <Footer><Logo /></Footer>
                </div>
            </>
        );
    }
}
