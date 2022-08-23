import React from "react";
import { Nav, Button, Container, Navbar, NavDropdown } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";


export function NavElement({user, onLoggedOut}) {

  const handleLogout = () => {
    onLoggedOut()
  };


  const isAuth= () => {
    if(typeof window =="undefined"){
      return false
    }
    if(localStorage.getItem("token") !== null){
      return localStorage.getItem("token")
    }else{
      return false
    }
  }

  return(

    <Navbar bg="light" sticky="top">
      <Container sm={12} md={10}>
        <Navbar.Brand><Link to="/">FIF</Link></Navbar.Brand>
          <Nav className="align-self-end">
            <Nav.Link href="/directors">Directors</Nav.Link>
            <Nav.Link href="/genres">Genres</Nav.Link>
            <Nav.Link href="/">Movies</Nav.Link>
            <NavDropdown title={user} id="basic-nav-dropdown">
              {isAuth() && (<NavDropdown.Item href={`/users/${user}`}>
                Profile</NavDropdown.Item>)}
              <NavDropdown.Item>
              {isAuth() && (<Button variant="link" onClick={handleLogout}>
                Logout</Button>)}
              </NavDropdown.Item>
              {!isAuth() && (<NavDropdown.Item href="/register">
                Register</NavDropdown.Item>)}
             
              {!isAuth() && (<NavDropdown.Item  href="/">
                Sign In</NavDropdown.Item>)}
            </NavDropdown>
          </Nav>
   
      </Container>
    </Navbar>

  );
}