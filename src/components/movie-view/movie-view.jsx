import React from "react";
import "./movie-view.scss";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import  MapComponent  from '../map-card/map-card';
import Container from 'react-bootstrap/Container';
import { Card, CardGroup, ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container className="movie-view">
         <CardGroup >
          <Card className="bg-light">
            <Card.Img variant="top" src={movie.imageURL} />

            <Card.Title className="align-self-center">{movie.title}</Card.Title>
            <Card.Body>
            <ListGroup>
            <ListGroup.Item className="d-flex flex-row justify-content-between">
              <Card.Subtitle >Director:</Card.Subtitle>
              <Card.Text>{movie.director}</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex flex-row ">
              <Card.Subtitle className="p-2 flex-grow-1">Setting: </Card.Subtitle>
              <Card.Text className="p-2">{movie.setting.location}</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex flex-row">
            <Card.Subtitle className="p-2 flex-grow-1">Cities:</Card.Subtitle>
            {movie.filmingLocations.map((location, index) => (
              <Card.Text className="p-2">{location.name}</Card.Text>
            ))}
              </ListGroup.Item>
             

          
     {/*
        <div className="value">          
          {movie.filmingLocations.map((location, index) => (
            <div key={location.name}>
              <p>City: {location.name}</p>
              <div>Scene: {location.locations.map((pinPoint, index) => (
              <div key={index}>{pinPoint.name} 
              </div>             
            ))}</div>
            
            </div>
            
          ))}        
        </div>
        */}
       
       
      <ListGroup.Item className="bg-white"> 
        <ListGroup.Item className="bg-light"> 
          <Card.Subtitle className="label">Filming Locations {}</Card.Subtitle>
          </ListGroup.Item>
          <MapComponent  movie={movie}  />
      </ListGroup.Item>
     </ListGroup>
     </Card.Body>
      <Button varient="primary" type="button" onClick={() => { onBackClick(null); }}>Back</Button>
      </Card>
      </CardGroup>
    </Container>
    );
  }

}

