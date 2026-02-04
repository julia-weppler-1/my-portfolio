
import React from "react";
import "./index.css";

const About= () => {
  return (
    <div className="about-container">
      <div className="about-header">
        ab<span>out</span>
      </div>
      <div className="about-info">
        <div className="about-left">
            <p>
                    Hello! My name is Julia Weppler, and I am a masters student 
                    at Northeastern University studying Computer Science with a focus in HCI and Data Visualization. Before Northeastern,
                    I completed my Bachelors of Science at Boston College in Computer Science with a Minor in Environmental Studies.
                    I was able to explore my passions for conservation, coastal resilience, software engineering, and data visualization through
                    courses like Marine Conservation (ENVS 3322), Data Visualization (CSCI 3390), Machine Learning (CSCI 3345), and my senior thesis (ENVS 4943).
                </p>
                <br></br>
                <p>
                    As I progressed through my studies at BC and applied my knowledge in professional settings, I
                    found myself repetitively asking “How will this be interacted with and understood?” I am excited to
                    leverage my curiosity and technical background to continue investigating ways to make
                    human-computer interactions and relationships more cohesive through my masters at Northeastern. Specifically, I’m interested in
                    exploring the ways in which we facilitate access to powerful computing tools and complex spatial data, and how these methods can be improved to help drive further
                    action and increase awareness around the ongoing climate crisis. Ultimately, my mission is to
                    contribute to interdisciplinary HCI knowledge by designing methods and systems in which we
                    can most effectively communicate the issues our society faces.
                </p>
        </div>
        <div className="about-right">
        <ul style={{ listStyleType: 'none' }}>
                <li><strong>Email:</strong> jnweppler@gmail.com</li>
                <li><strong>Location:</strong> Boston, MA</li>
                <li><strong>B.S. in Computer Science; Minor in Environmental Studies</strong> Boston College (2021-2025): 3.78/4.0</li>
                <li><strong>M.S. in Computer Science</strong> Northeastern University (2025-2027): 4.0/4.0</li>
                <li><strong>Skills:</strong> Python, JavaScript, React, Node JS, D3, Vega, SQL</li>
                <li><strong>Platforms and Tools:</strong> Esri ArcGIS, Azure Blob, Azure Databricks, Azure SQL, Microsoft Graph, GitHub, Figma, Tableau</li>
                <li><strong>Awards and Recognitions:</strong> Northeastern University Research Apprentice Scholarship Recipient (Spring 2026); Standout Summer Intern (Optum, 2023); 1st place in Botany at the Jesrsey Shore Science Fair and 3rd place in Botany at the Delaware Valley Regional Science Fair for "The Effects of Ocean Acidification on Rates of Photosynthesis and Overall Health of <em>Zostera marina</em>" (2019)</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
