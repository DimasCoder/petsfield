import React, { Component } from 'react';
import "../App.css";
import { Container, Row } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router, Switch,NavLink, Route} from 'react-router-dom';


export default class Intro extends Component{
  render(){


    return(
      <>
       <Container fluid="lg" style={{ paddingLeft: 0, paddingRight: 0 }} className="container-fluid-intro">
            <div className="intro-container">
            <Row><h1>Need a house-sitter for your pet?</h1></Row>
            <Row><h1> Petsfield is easy way for this</h1></Row>
            <Row className="main-row">
                <Link to="stat" smooth={true} className="btn-get-started">Get Started</Link>
                <Link to="describe" smooth={true} className="btn-more-info">More Info</Link>
            </Row>
            </div>
        </Container>
        </>
    )
  }
}
