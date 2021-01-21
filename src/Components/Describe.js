import React, { Component } from 'react';
import "../App.css";
import {Container, Row, Col } from 'react-bootstrap';
import girl from "../img/girl.jpg";
import cat from "../img/cat.jpg";
import dog from "../img/dog.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router, Switch,NavLink, Route} from 'react-router-dom';


export default class Describe extends Component{
  render(){


    return(
      <>
        <Container id="describe" className="describe-container">
                <h2>Why You Should Choose Us?</h2>
                <div className="describe-content">
                    <Row className="mt-5 mb-5 describe-row">
                        <Col md="7 describe-text-one">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Dicta perspiciatis corporis eos neque, facere quis recusandae voluptatibus commodi
               facilis necessitatibus labore alias laborum explicabo earum consequatur a nemo ipsam! Illum deleniti nihil quas voluptate ratione esse expedita
                repellat dolorum consequatur nostrum hic iusto tempora alias, reprehenderit non
                 aspernatur voluptas, suscipit eaque repudiandae? Ex impedit rem at cupiditate
                  iure dolores qui quis dicta sed cumque voluptate aperiam, eum incidunt repellat,
                   illum doloribus nam deleniti laborum. Doloribus architecto, eveniet numquam
                    quisquam rerum!</p></Col>
                    <Col md="5 describe-image-one"><img className="img-fluid ml-auto" src={girl} alt=""/></Col>
                    </Row>
                    <Row className="mt-5 mb-5 describe-row">
                    <Col md="5 describe-image-two"><img src={cat} alt="" className="img-fluid mr-auto"/></Col>
                    <Col md="7 describe-text-two">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Dicta perspiciatis corporis eos neque, facere quis recusandae voluptatibus commodi
               facilis necessitatibus labore alias laborum explicabo earum consequatur a nemo ipsam! Illum deleniti nihil quas voluptate ratione esse expedita
                repellat dolorum consequatur nostrum hic iusto tempora alias, reprehenderit non
                 aspernatur voluptas, suscipit eaque repudiandae? Ex impedit rem at cupiditate
                  iure dolores qui quis dicta sed cumque voluptate aperiam, eum incidunt repellat,
                   illum doloribus nam deleniti laborum. Doloribus architecto, eveniet numquam
                    quisquam rerum!</p></Col>
                    </Row>
                    <Row className="mt-5 describe-row">
                        <Col md="7 describe-text-three">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Dicta perspiciatis corporis eos neque, facere quis recusandae voluptatibus commodi
               facilis necessitatibus labore alias laborum explicabo earum consequatur a nemo ipsam! Illum deleniti nihil quas voluptate ratione esse expedita
                repellat dolorum consequatur nostrum hic iusto tempora alias, reprehenderit non
                 aspernatur voluptas, suscipit eaque repudiandae? Ex impedit rem at cupiditate
                  iure dolores qui quis dicta sed cumque voluptate aperiam, eum incidunt repellat,
                   illum doloribus nam deleniti laborum. Doloribus architecto, eveniet numquam
                    quisquam rerum!</p></Col>
                    <Col md="5 describe-image-three"><img src={dog} alt="" className="img-fluid ml-auto"/></Col></Row>
                </div>
        </Container>
        </>
    )
  }
}
