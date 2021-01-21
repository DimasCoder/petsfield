import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import Intro from './Components/Intro.js'
import Describe from './Components/Describe.js'
import Specialists from './Components/Specialists.js'
import Statistic from './Components/Statistic.js'
import Carousel from './Components/OwlCarousel.js'
import Contact from './Components/Contact.js'
import Footer from './Components/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <>
    <Header/>
    <Intro/>
    <Describe/>
    <Specialists/>
    <Statistic/>
    <Carousel/>
    <Contact/>
    <Footer/>
   </>
  );
}

export default App;
