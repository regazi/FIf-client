import React from "react";
import PropTypes from "prop-types";
import "./movie-card.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieCard extends React.Component {
    render(){
       const { movie, onMovieClick } = this.props;
        return (
          <Card>
          <Card.Img variant="top" src={movie.imageURL} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>Setting: {movie.setting.location}</Card.Text>
            <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
          </Card.Body>
        </Card>
        )
    }
}
MovieCard.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,    
      imageURL: PropTypes.string.isRequired,
      setting: PropTypes.shape({
        location: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };