import React, { Component } from 'react';
import "../App.css";
import { NavItem, Navbar,Nav,  Button, Container  } from 'react-bootstrap';
import logo from "../img/logo.png"
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends Component{
  render(){


    return(
      <>
        <Navbar collapseOnSelect sticky="top" expand="md" variant="light" className="nav-bar">
          <Container fluid="lg" className="nav-bar-container" >
            <Navbar.Brand href="/" >
              <img
                src={logo}
                className="d-inline-block align-top nav-logo"
                alt="Logo"
              /> 
            </Navbar.Brand>
            <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse>
              <Nav className="ml-auto nav-links">
                <Link className="header-nav-link">Home</Link>
                <Link className="header-nav-link">About us</Link>
                <Link className="header-nav-link ml"> Specialists</Link>
                <Link className="header-nav-link"> Your pets</Link>
                <Link className="header-nav-link btn-start"> Get Started</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        </>
    )
  }
}
