import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../index.css";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 text-center">
            <div className="container mx-auto">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.linkedin.com/in/soniya-malviya-b3832a236/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/soniya-malviy" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/soniya01_100/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                <p>&copy; 2024 Soniya. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

