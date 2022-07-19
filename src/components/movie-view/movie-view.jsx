import React from "react";

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
          
        <div className="value">
          {movie.filmingLocations.map((location, index) => (
            <div key={index}>
            <p>City: {location.name}</p>
            <p>Scene: {location.locations.scene}</p>
          {/* This is where the Map embed will go*/}
            <div> Lat-Long : {location.locations.location.map( geo => <p>{geo}</p>)}</div>
          
            </div>
          ))}
        
        </div>
  
         </div>
        
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
       </div>
    );
  }
}