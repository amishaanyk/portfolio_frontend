import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import axios from "axios";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Import icons or use SVGs for Gmail and other platforms
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
    const [status, setStatus] = useState({});
    
    // Function to handle clicking on Gmail icon
    const handleGmailClick = () => {
        window.location.href = "mailto:amisha16902@gmail.com";
    };

    // Function to handle clicking on LinkedIn icon
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
                                        <Col sm={12}>
                                            <div className="contact-icons">
                                                {/* Gmail Icon */}
                                                <button onClick={handleGmailClick}>
                                                    <FaEnvelope size={30} />
                                                    <span>Contact via Gmail</span>
                                                </button>
                                                {/* LinkedIn Icon */}
                                                <button onClick={handleLinkedInClick}>
                                                    <FaLinkedin size={30} />
                                                    <span>Contact via LinkedIn</span>
                                                </button>
                                                {/* Add more icons/buttons for other platforms */}
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
