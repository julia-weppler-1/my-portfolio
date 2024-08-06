// src/components/AboutMe.js
import React from 'react';
import './index.css';

const About = () => (
    <div className="about-container">
        <img src='/my-portfolio/images/selfie.jpeg' alt="Profile" className="profile-picture" />
        <div className="grid-container">
            <div className="section">
                <div className="section-content">
                    <h2>About Me</h2>
                    <p>
                        Hello! My name is Julia Weppler, and I am an undergraduate student at Boston College studying Computer Science and Environmental Studies. I am passionate about using technology to solve environmental problems and create a more sustainable future. I am also very interested in frontend development, human-computer interaction, and the design process. I have experience with web development, data visualization, geospatial analysis, LLMs, and research. I am currently seeking full-time roles and research opportunities in software engineering, data science, and environmental science.
                    </p>
                </div>
            </div>
            <div className="section">
                <div className="section-content">
                    <h2>Details</h2>
                    <ul>
                        <li><strong>Name:</strong> Julia Weppler</li>
                        <li><strong>Email:</strong> jnweppler@gmail.com</li>
                        <li><strong>Location:</strong> Boston, MA</li>
                        <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Python, Scala, SQL, C, D3, Vega</li>
                        <li><strong>Platforms and Tools:</strong> Esri ArcGIS, AWS Sagemaker, Azure Blob, Azure Databricks, GitHub, Figma, Tableau, VSCode</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default About;
