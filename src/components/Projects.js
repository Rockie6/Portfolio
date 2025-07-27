import React from 'react';
import './Projects.css';

const projectsData = [
    {
        title: 'Network Security Scanner',
        description: 'A Python-based network scanning tool that identifies active hosts, open ports, and potential vulnerabilities in a network environment.',
        technologies: ['Python', 'Scapy', 'Nmap'],
        link: 'https://github.com/Rockie6/network-security-scanner',
    },
    {
        title: 'Penetration Testing Report',
        description: 'Comprehensive security assessment of a university web application, identifying vulnerabilities and providing remediation strategies.',
        technologies: ['OWASP', 'Burp Suite', 'Vulnerability Reporting'],
        link: 'https://github.com/Rockie6/penetration-testing-report',
    },
    {
        title: 'Digital Forensic Toolkit',
        description: 'Python utility for automating forensic analysis tasks including file carving, metadata extraction, and timeline generation.',
        technologies: ['Python', 'Forensics', 'Automation'],
        link: 'https://github.com/Rockie6/digital-forensic-toolkit',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <i className="fas fa-project-diagram" style={{ fontSize: '4rem', color: 'var(--accent)'}}></i>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.technologies.map((tech, idx) => (
                                        <span className="tech-tag" key={idx}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i> View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;