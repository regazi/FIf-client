import React from "react";
import axios from 'axios';
import { MovieCard } from "../movie-card/movie-card"
import { MovieView } from "../movie-view/movie-view"
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import "./main-view.scss";

export default class MainView extends React.Component {

    constructor(){
        super();
        //initialize state
        this.state = {
          movies: [],
          selectedMovie: null,
          user: null
        }
    }

    componentDidMount(){
      axios.get('https://fifilm.herokuapp.com/movies')
        .then(response => {
          this.setState({
            movies: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
    setSelectedMovie(newSelectedMovie) {
      this.setState({
        selectedMovie: newSelectedMovie
      });
    }

    onLoggedIn(user) {
      this.setState({
        user
      });
    }

    onReg(register) {
      this.setState(
        {register}
    )
    }

    render() {
      const {movies, selectedMovie, user, register}  = this.state;
      if (!register) return (<RegistrationView onReg={(register) => this.onReg(register)}/>);
      //check for login
      if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
      //check for data
      if (movies.length === 0)
        return <div className="main-view" />;
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
