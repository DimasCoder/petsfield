import React, {Component} from 'react';
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
    render() {
        return (
            <>
                <Container fluid="md">
                    <div className="contact-container">
                        <div className="contact-form">
                            <h3>Contact us</h3>
                            <div className="contact-fields">
                            <Col className="">
                                <Row>
                                    <Col>
                                    <p>First name</p>
                                        <input type="input" name="name" placeholder="Name"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>Phone number</p>
                                        <input type="input" name="" placeholder="0983090726"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>Your pet</p>
                                        <select>
                                            <option value="dog">Dog</option>
                                            <option value="cat"> Cat</option>
                                            <option value="parrot">Parrot</option>
                                            <option value="hamster">Hamster</option>
                                            <option value="mouse">Mouse</option>
                                            <option value="chinchilla">Chinchilla</option>
                                        </select>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="">
                                <Row>
                                    <Col>
                                    <p>Second name</p>
                                        <input type="input" name="" placeholder="Surname"/>
                                </Col>
                                    </Row>
                                <Row>
                                    <Col>
                                    <p>Email</p>
                                        <input type="input" name="" placeholder="Example@gmail.com"/>
                                </Col></Row>

                            </Col>
                            </div>
                            <div className="submit">
                            <div className="submit-btn">
                                <input type="submit" name="" value="Submit"/>
                            </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </>
        );
    }
}

export default Contact;