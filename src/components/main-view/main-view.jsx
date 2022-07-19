import React from "react";
import { MovieCard } from "../movie-card/movie-card"
import { MovieView } from "../movie-view/movie-view"


export default class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
          movies: [
            { _id: 1, title: "Parker", filmingLocations:[{name:"Sarasota", locations:{scene:"Parkers Hotel", location:["26.34245407611482", "-80.07858416879215" ]}}, {name:"Miami", locations:{scene:"Jump", location:["26.3423247611482", "-10.07858416879215" ]}}], setting: {location: "Miami"}, imageURL: "https://m.media-amazon.com/images/M/MV5BZGFmOGRhNjctNjZlMi00Yjc0LTkyYjUtMGM1Mjg2NzEzMmZiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"},
            { _id: 2, title: "Scarface", filmingLocations:[{name:"Sarasota", locations:{scene:"Parkers Hotel", location:["26.34245407611482", "-80.07858416879215" ]}}], setting: {location: "Miami"}, imageURL: "..."},
            { _id: 3, title: "The Big Short", filmingLocations:[{name:"Sarasota", locations:{scene:"Parkers Hotel", location:["26.34245407611482", "-80.07858416879215" ]}}], setting: {location: "Miami"}, imageURL: "..."}
          ],
          selectedMovie: null
        }
    }

    setSelectedMovie(newSelectedMovie) {
      this.setState({
        selectedMovie: newSelectedMovie
      });
    }
    render() {
      const {movies, selectedMovie}  = this.state;
      if (movies.length === 0)
         return <div className="main-view">The list is empty!</div>;
        return (
          <div className="main-view">
          {selectedMovie
            ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
            : movies.map(movie => (
              <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
            ))
          }
        </div>
        );
      }
      
}
