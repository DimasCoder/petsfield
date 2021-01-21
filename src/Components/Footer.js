import React, {Component} from 'react';
import logo from "../img/logo.png"

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
            <div class="footer-container">
                <div class="company-info">
                    <div class="footer-contact-info">
                        <div class="contact-icon-marker">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="address-text">
                            <p>Lukasha 5 Street, <span>Lviv, Ukraine</span></p>
                        </div>
                    </div>
                    <div class="footer-contact-info">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="number-text">
                            <p>+380-980-000-000</p>
                        </div>
                    </div>
                    <div class="footer-contact-info">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="mail-text">
                            <p>example@example.com</p>
                        </div>
                    </div>
                </div>
                <div class="company-info">
                    <div class="footer-contact-info">
                        <div class="contact-icon">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div class="tweets-text">
                            <p>Your Cybertruck is here. It's just ...
                                a toy. The Hot Wheels Tesla Cybertruck goes
                                25 miles per hour and accelerates like a demon.
                            </p>
                        </div>
                    </div>
                    <div class="footer-contact-info">
                        <div class="contact-icon">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div class="tweets-text">
                            <p>Your Cybertruck is here. It's just ...
                                a toy. The Hot Wheels Tesla Cybertruck goes
                                25 miles per hour and accelerates like a demon.
                            </p>
                        </div>
                    </div>
                    <div class="footer-contact-info">
                        <div class="contact-icon">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div class="tweets-text">
                            <p>Your Cybertruck is here. It's just ...
                                a toy. The Hot Wheels Tesla Cybertruck goes
                                25 miles per hour and accelerates like a demon.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="company-info">
                    <div class="footer-contact-info company">
                        <div>
                            <h4>About company</h4>
                        </div>
                    </div>
                    <div class="footer-contact-info company">
                        <div>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repudiandae at ea deserunt porro, et delectus. Molestiae incidunt reiciendis, consectetur!</h5>
                        </div>
                    </div>
                    <div class="footer-contact-info company">
                        <div class="footer-images">
                            <img
                                src={logo}
                                className="d-inline-block align-top nav-logo"
                                alt="Logo"
                            />
                            <div>
                                <a href="#"><i class="fab fa-facebook-square fa-3x"></i></a>
                                <a href="#"><i class="fab fa-instagram-square fa-3x"></i></a>
                                <a href="#"><i class="fab fa-twitter-square fa-3x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="developer">
                <p>Developed by <a href="http://instagram.com/dima_kulykovych">Dmytro Kulykovych</a>. All rights reserved.</p>
            </div>
                </div>
            </>
        );
    }
}

export default Footer;