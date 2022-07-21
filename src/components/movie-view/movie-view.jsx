import React from "react";
import "./movie-view.scss";
import PropTypes from "prop-types";


export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.imageURL} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.title}</span>
        </div>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{movie.director}</span>
        </div>
        <div className="movie-setting">
          <span className="label">Setting: </span>
          <span className="value">{movie.setting.location}</span>
        </div>
        <div className="location-map">
          <span className="label">Filming Locations: </span>
          <div>

          {/* Might need to either aggrigate or restructure DB so that filmingLocations is its own collection */}
           {/* The following section is where the Map embed will go*/}
        <div className="value">          
          {movie.filmingLocations.map((location, index) => (
            <div key={location.name}>
            <p>City: {location.name}</p>
            <div>Scene: {location.locations.map((pinPoint, index) => (
              <div key={index}>{pinPoint.name} - {pinPoint.location.map((latLong, index) => (
                <p key={index}>{latLong}</p>
              ))}</div>             
            ) )}</div>
            </div>
          ))}        
        </div>
  
        </div>
        
      </div>
      <button key={movie} onClick={() => { onBackClick(null); }}>Back</button>
    </div>
    );
  }

}

MovieView.propTypes = {
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
  }).isRequired
};