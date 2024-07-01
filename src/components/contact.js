import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import axios from "axios";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaEnvelope, FaLinkedin, FaArrowRight } from 'react-icons/fa';

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
                                    <div className="d-flex flex-column">
                                        {/* Gmail Button */}
                                        <Button variant="dark" className="mb-3" onClick={handleGmailClick}>
                                            <FaEnvelope size={20} className="me-2" />
                                            Contact via Gmail
                                            <FaArrowRight size={16} className="ms-2" />
                                        </Button>

                                        {/* LinkedIn Button */}
                                        <Button variant="secondary" className="mb-3" onClick={handleLinkedInClick}>
                                            <FaLinkedin size={20} className="me-2" />
                                            Contact via LinkedIn
                                            <FaArrowRight size={16} className="ms-2" />
                                        </Button>

                                        {/* Status Message */}
                                        {
                                            status.message &&
                                            <p className={status.success === false ? "text-danger" : "text-success"}>{status.message}</p>
                                        }
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
