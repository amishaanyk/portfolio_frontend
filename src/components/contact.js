import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import axios from "axios";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Import icons or use SVGs for Gmail and LinkedIn
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
    const [status, setStatus] = useState({});
    
    // Function to handle clicking on Gmail button
    const handleGmailClick = () => {
        window.location.href = "mailto:amisha16902@gmail.com";
    };

    // Function to handle clicking on LinkedIn button
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/your-linkedin-profile", "_blank");
        // Replace "your-linkedin-profile" with your actual LinkedIn profile URL
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <Row>
                                        <Col sm={12} className="mb-3">
                                            {/* Gmail Button */}
                                            <div className="contact-button-wrapper">
                                                <button className="contact-button" onClick={handleGmailClick}>
                                                    <FaEnvelope size={20} />
                                                    <span>Contact via Gmail</span>
                                                </button>
                                            </div>
                                        </Col>
                                        <Col sm={12}>
                                            {/* LinkedIn Button */}
                                            <div className="contact-button-wrapper">
                                                <button className="contact-button" onClick={handleLinkedInClick}>
                                                    <FaLinkedin size={20} />
                                                    <span>Contact via LinkedIn</span>
                                                </button>
                                            </div>
                                        </Col>
                                        {
                                            status.message &&
                                            <Col sm={12}>
                                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                            </Col>
                                        }
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
