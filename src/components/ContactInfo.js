import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <h2>Contact Me</h2>
            <div className="contact-details">
                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span>
                        <a
                            href="mailto:onchokarockson941@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Email
                        </a>
                    </span>
                </div>
                <div className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <span>
                        <a
                            href="https://wa.me/254794229996"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>
                    </span>
                </div>
                <div className="contact-item">
                    <FaLinkedin className="contact-icon" />
                    <span>
                        <a href="https://linkedin.com/in/rockson-onchoka-81670830a" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </span>
                </div>
                <div className="contact-item">
                    <FaGithub className="contact-icon" />
                    <span>
                        <a href="https://github.com/Rockie6" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </span>
                </div>
                <div className="contact-item">
                    <FaTwitter className="contact-icon" />
                    <span>
                        <a href="https://x.com/rockieke6" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;