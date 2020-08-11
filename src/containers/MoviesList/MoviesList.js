import React, { Component } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

import "./MoviesList.scss";

export default class MoviesList extends Component {
    constructor() {
        super();
        this.state = {
            moviesList: [
                {
                    title: "Inception",
                    imageUrl: "https://movieposters2.com/images/639314-b.jpg",
                    genre: "Action & Adventure",
                    year: "2003",
                },
                {
                    title: "Inception",
                    imageUrl: "https://movieposters2.com/images/639314-b.jpg",
                    genre: "Action & Adventure",
                    year: "2003",
                },
                {
                    title: "Inception",
                    imageUrl: "https://movieposters2.com/images/639314-b.jpg",
                    genre: "Action & Adventure",
                    year: "2003",
                },
                {
                    title: "Inception",
                    imageUrl: "https://movieposters2.com/images/639314-b.jpg",
                    genre: "Action & Adventure",
                    year: "2003",
                },
                {
                    title: "Inception",
                    imageUrl: "https://movieposters2.com/images/639314-b.jpg",
                    genre: "Action & Adventure",
                    year: "2003",
                },
                {
                    title: "Inception",
                    imageUrl: "https://movieposters2.com/images/639314-b.jpg",
                    genre: "Action & Adventure",
                    year: "2003",
                },
            ]
        };
    }

    render() {
        const movies = this.state.moviesList;
        return (
            <div className="movies-container">
                <p className="movies-results"><b>{movies.length}</b> movies found</p>
                <div className="movies-list">
                    {movies.length &&
                        movies.map((movie, index) => (
                            <MovieCard key={`${movie.title}-${index}`}
                                title={movie.title}
                                imageUrl={movie.imageUrl}
                                genre={movie.genre}
                                year={movie.year} />
                        ))}
                </div>
            </div>
        );
    }
}
