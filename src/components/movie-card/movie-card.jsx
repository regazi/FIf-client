import React from "react";
import PropTypes from "prop-types";
import "./movie-card.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  {ImgComponent}  from '../image-component/image-component';

export class MovieCard extends React.Component {
  



    render(){
       const { movie, onMovieClick } = this.props;
        return (
          <Card className="p-1">            
           <Card.Img id="pic" variant="top" style={{height: 25 + "%"}} className="card-img-top img-thumbnail p-3" crossOrigin="true" src={movie.imageURL} />
          <Card.Body className="p-4">
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>Setting: {movie.setting.location}</Card.Text>
            <Button type="button" onClick={() => onMovieClick(movie)} variant="primary">Open</Button>
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