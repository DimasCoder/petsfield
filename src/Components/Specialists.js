import React, { Component } from 'react';
import "../App.css";
import { NavItem, Navbar,Nav,  Button, Container, Row, Col } from 'react-bootstrap';
import jane from "../img/jane.jpg";
import bertha from "../img/bertha.jpg";
import ethan from "../img/ethan.jpg";
import kathryn from "../img/kathryn.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router, Switch,NavLink, Route} from 'react-router-dom';


export default class Specialists extends Component{
  render(){


    return(
      <>
        <Container id="specialists" className="specialist-container">
                <h2>Our best specialists</h2>
                    <Row xs="1" sm="2" md="4">
                        <Col className="specialist-card">
                                <div class="specialist-img"><img src={jane} alt=""/></div>
                                <div class="specialist-name"><p>Jane Hampton</p></div>
                                <div class="specialist-describe"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nihil at est deleniti unde assumenda nemo et ea blanditiis excepturi.</p></div>
                                </Col>
                                <Col className="specialist-card">
                                <div class="specialist-img"><img src={bertha} alt=""/></div>
                                <div class="specialist-name"><p>Bertha Lindsey</p></div>
                                <div class="specialist-describe"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repellat, quis et aut dolorem fugiat nisi cum dolore impedit error?</p></div>
                                </Col>
                                <Col className="specialist-card">
                                <div class="specialist-img"><img src={ethan} alt=""/></div>
                                <div class="specialist-name"><p>Ethan McKenzie</p></div>
                                <div class="specialist-describe"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque deserunt quo quia debitis assumenda fugit voluptas est obcaecati, autem praesentium.</p></div>
                                </Col>
                                <Col className="specialist-card">
                                <div class="specialist-img"><img src={kathryn} alt=""/></div>
                                <div class="specialist-name"><p>Kathryn Terry</p></div>
                                <div class="specialist-describe"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati accusantium non sed, labore tempore necessitatibus quaerat similique ipsum asperiores explicabo.</p></div>
                                </Col>
                        <div id="stat"></div>
                    </Row>
        </Container>
        </>
    )
  }
}
