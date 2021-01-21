import React, { Component } from 'react';
import "../App.css";
import { NavItem, Navbar,Nav,  Button, Container, Row } from 'react-bootstrap';
import pet1 from "../img/pet1.jpg";
import pet2 from "../img/pet2.jpg";
import pet3 from "../img/pet3.jpg";
import pet4 from "../img/pet4.jpg";
import pet5 from "../img/pet5.jpg";
import pet6 from "../img/pet6.jpg";
import pet7 from "../img/pet7.jpg";
import pet8 from "../img/pet8.jpg";
import pet9 from "../img/pet9.jpg";
import pet10 from "../img/pet10.jpg";
import pet11 from "../img/pet11.jpg";
import pet12 from "../img/pet12.jpg";
import pet13 from "../img/pet13.jpg";
import pet14 from "../img/pet14.jpg";
import pet15 from "../img/pet15.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router, Switch,NavLink, Route} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

export default class Carousel extends Component{
    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 6,
            },
        },
    }

  render(){


    return(
      <>
        <Container id="intro" className="carousel-container">
                <OwlCarousel items={6}
                    margin={8}
                    autoplay ={true}
                    loop ={true}
                responsive={this.state.responsive}>
                    <div><img src={pet5} alt=""/></div>
                    <div><img src={pet2} alt=""/></div>
                    <div><img src={pet14} alt=""/></div>
                    <div><img src={pet9} alt=""/></div>
                    <div><img src={pet12} alt=""/></div>
                    <div><img src={pet4} alt=""/></div>
                    <div><img src={pet3} alt=""/></div>
                    <div><img src={pet7} alt=""/></div>
                    <div><img src={pet13} alt=""/></div>
                    <div><img src={pet15} alt=""/></div>
                    <div><img src={pet1} alt=""/></div>
                    <div><img src={pet6} alt=""/></div>
                    <div><img src={pet8} alt=""/></div>
                    <div><img src={pet10} alt=""/></div>
                    <div><img src={pet11} alt=""/></div>

                </OwlCarousel>
        </Container>
        </>
    )
  }
}
