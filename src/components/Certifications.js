import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Certifications.css';

const certifications = [
    {
        title: 'CompTIA Security+',
        year: '2023',
    },
    {
        title: 'Certified Ethical Hacker (CEH)',
        year: '2024',
    },
    {
        title: 'Cisco Certified CyberOps Associate',
        year: '2024',
    },
    {
        title: 'AWS Certified Cloud Practitioner',
        year: '2023',
    },
];

const Certifications = () => {
    return (
        <section className="certifications">
            <h2>Certifications</h2>
            <ul className="certifications-list">
                {certifications.map((cert, index) => (
                    <li key={index} className="certification-item">
                        <FaCheckCircle className="check-icon" />
                        <span className="certification-title">{cert.title}</span>
                        <span className="certification-year">({cert.year})</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Certifications;