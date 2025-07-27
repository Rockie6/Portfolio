import React from 'react';
import { FaPython, FaNetworkWired, FaShieldAlt, FaLaptopCode, FaSearch } from 'react-icons/fa';
import './ToolsTechnologies.css';

const ToolsTechnologies = () => {
    return (
        <section className="tools-technologies">
            <h2>Tools & Technologies</h2>
            <div className="tech-icons">
                <div className="tech-icon">
                    <FaPython size={50} />
                    <p>Python</p>
                </div>
                <div className="tech-icon">
                    <FaNetworkWired size={50} />
                    <p>Networking</p>
                </div>
                <div className="tech-icon">
                    <FaShieldAlt size={50} />
                    <p>Security</p>
                </div>
                <div className="tech-icon">
                    <FaLaptopCode size={50} />
                    <p>Development</p>
                </div>
                <div className="tech-icon">
                    <FaSearch size={50} />
                    <p>Forensics</p>
                </div>
            </div>
        </section>
    );
};

export default ToolsTechnologies;

