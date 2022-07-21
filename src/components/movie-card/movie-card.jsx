import React from "react";
import PropTypes from "prop-types";
import "./movie-card.scss";


export class MovieCard extends React.Component {
    render(){
        const { movie, onMovieClick } = this.props;
        return <div className="movie-card" key={movie._id} onClick={() => { onMovieClick(movie) }}>{movie.title} </div>
    }
}
MovieCard.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      }),
      director: PropTypes.shape({
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired
      }),
      imageURL: PropTypes.string.isRequired,
      setting: PropTypes.shape({
        location: PropTypes.string.isRequired
      }).isRequired,
      filmingLocations: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            location: PropTypes.arrayOf(
            PropTypes.string.isRequired,
            PropTypes.string.isRequired

            )
        })
      )
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };