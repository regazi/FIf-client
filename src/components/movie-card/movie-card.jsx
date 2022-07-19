import React from "react";

export class MovieCard extends React.Component {
    render(){
        const { movie, onMovieClick } = this.props;
        return <div className="movie-card" key={movie._id} onClick={() => { onMovieClick(movie) }}>{movie.title} </div>
    }
}