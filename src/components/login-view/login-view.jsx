import React, { useState } from 'react';
import "./login-view.scss";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, CardGroup, Container } from 'react-bootstrap';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);  
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
     props.onLoggedIn(username);
  };

 
  const viewRegistration = () => {
  //show reg view  
  
  };
  
 

  
  return (
    <Container fluid className="main-container">
    <Row className="d-flex flex-row justify-content-center p-2">
      <Col xs={12} sm={6} md={4} lg={4} className="justify-content-center">
      <CardGroup xs={12} sm={6} md={4} lg={4}>
        <Card>
        <Card.Title className="align-self-center">Login</Card.Title>
    <Form className="align-self-center">
      <Form.Group controlId="formUsername">
      <Form.Label>Username:</Form.Label>
      <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
    </Form.Group>
    <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <nav className="navbar justify-content-center">
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </nav>
    </Form>
    </Card>
      </CardGroup>
      </Col>
    </Row>
    </Container>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};