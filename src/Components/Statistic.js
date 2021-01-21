import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {Col} from "react-bootstrap";

class Statistic extends Component {
    render() {
        return (
            <>
                <Container id="statistic" className="statistic-container">
                        <h2>And what about your pets?</h2>
                        <div className="statistic-content">
                        <Col sm={12} md={7} className="statistic-left">
                            <h3>Your pets will have good time!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem ea enim et eveniet expedita impedit iusto obcaecati, odit porro qui quia sed suscipit vero!</p>
                        </Col>
                        <Col sm={12} md={5} className="statistic-right">
                            <h3>Why your pets are safe with <span>Petsfield</span>?</h3>
                            <div class="statistic-right-container">
                                <div class="pulse-container">
                                    <div class="pulse-text-container">
                                        <div class="blob-orange"></div>
                                        <div class="text-container">
                                            <div class="pulse-stat-orange"><p>407</p></div>
                                            <div class="pulse-text">
                                                <p>sitters</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pulse-describe">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum nesciunt ducimus possimus itaque expedita. Aliquam, quam sapiente aliquid! Laborum?</p>
                                    </div>
                                </div>
                                <div class="pulse-container">
                                    <div class="pulse-text-container">
                                        <div class="blob-red"></div>
                                        <div class="text-container">
                                            <div class="pulse-stat-red"><p>1259</p></div>
                                            <div class="pulse-text">
                                                <p>clients</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pulse-describe">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo id assumenda praesentium cupiditate, veritatis recusandae.</p>
                                    </div>
                                </div>
                                <div class="pulse-container">
                                    <div class="pulse-text-container">
                                        <div class="blob-green"></div>
                                        <div class="text-container">
                                            <div class="pulse-stat-green"><p>133</p></div>
                                            <div class="pulse-text">
                                                <p>cities</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pulse-describe">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ducimus enim, optio maxime cum. Soluta, impedit?</p>
                                    </div>
                                </div>
                                <div class="pulse-container">
                                    <div class="pulse-text-container">
                                        <div class="blob-blue"></div>
                                        <div class="text-container">
                                            <div class="pulse-stat-blue"><p>6421</p></div>
                                            <div class="pulse-text">
                                                <p>reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pulse-describe">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum nesciunt ducimus possimus itaque expedita. Aliquam, quam sapiente aliquid! Laborum?</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        </div>
                </Container>
            </>
        );
    }
}

export default Statistic;