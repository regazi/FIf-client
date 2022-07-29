import React, { useState } from 'react';
import "./registration-view.scss";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Card, CardGroup, Container } from 'react-bootstrap';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send to server */
    props.onReg(username);
     
  };

  return (
    <Container fluid className="main-container">
    <Row className="d-flex flex-row justify-content-center p-2">
      <Col xs={12} sm={6} md={4} lg={4} className="justify-content-center">
      <CardGroup xs={12} sm={6} md={4} lg={4} className="caCard">
        <Card className="item-align-center">
        <Card.Title className="align-self-center">Create Account</Card.Title>
        <Form  className="align-self-center">
          <Form.Group controlId="formUsername">
          Username:
          <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formEmail">
          Email:
          <Form.Control type="text"  onChange={e => setEmail(e.target.value)}  />
        </Form.Group>
        <Form.Group controlId="formBirthdate">
          Birthdate:
          <Form.Control type="date" onChange={e => setBirthday(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formPassword">
          Password:
          <Form.Control type="text" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
       
      <nav className="navbar">
      <Button variant="primary" type="submit" onClick={handleSubmit}>Create Account</Button>
      <Button variant="primary" type="button" onClick={handleSubmit}>Login</Button>
      </nav>
    </Form>
    </Card>
      </CardGroup>
      </Col>
    </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  onReg: PropTypes.func.isRequired,
};