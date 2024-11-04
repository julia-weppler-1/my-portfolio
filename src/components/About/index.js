
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
                    Hello! My name is Julia Weppler, and I am an undergraduate student 
                    at Boston College studying Computer Science and Environmental Studies. Before BC,
                    I attended the Marine Academy of Technology and Environmental Science (MATES), a small magnet high school in southern
                    New Jersey. During my time there, I was provided with the opportunity to lead my own independent research
                    on the impacts of ocean acidification on the photosynthesis rates of local eelgrass species, a topic which was
                    largely unexplored at the time and earned me recognition at state and regional science fairs. I was also able to
                    explore my passion for conservation and STEM in dual-enrollment courses such as Oceanography, Geographic Information Systems, and Computer Science.
                </p>
                <br></br>
                <p>
                    As I continued advanced studies in Computer Science at BC and applied my knowledge in professional settings, I
                    found myself repetitively asking “How will this be interacted with and understood?” I am excited to
                    leverage my curiosity and technical background to continue investigating ways to make
                    human-computer interactions and relationships more cohesive upon completion of my degree. Specifically, I’m interested in
                    exploring the ways in which we facilitate access to powerful computing tools, such as Big Data
                    Systems and artificial intelligence, and how these methods can be improved to help drive further
                    action and increase awareness around the ongoing climate crisis. Ultimately, my mission is to
                    contribute to interdisciplinary HCI knowledge by designing methods and systems in which we
                    can most effectively communicate the issues our society faces.
                </p>
        </div>
        <div className="about-right">
        <ul>
                <li><strong>Julia Weppler</strong> </li>
                <li><strong>Email:</strong> jnweppler@gmail.com</li>
                <li><strong>Location:</strong> Boston, MA</li>
                <li><strong>B.S. in Computer Science</strong> Boston College (2021-2025)</li>
                <li><strong>Minor in Environmental Studies</strong> Boston College (2021-2025)</li>
                <li><strong>Skills:</strong> JavaScript, React, Django, Node.js, HTML, CSS, D3, Vega, Python, Scala, SQL, C, Agile Development, Quality Assurance, APIs, Lean Programming Language, Linear Algebra, Computer Organization, Verilog</li>
                <li><strong>Platforms and Tools:</strong> Esri ArcGIS, AWS Sagemaker, Azure Blob, Azure Databricks, GitHub, Figma, Tableau, VSCode, Quartus</li>
                <li><strong>Awards and Recognitions:</strong> Standout Summer Intern (Optum, 2023); 1st place in Botany at the Jesrsey Shore Science Fair and 3rd place in Botany at the Delaware Valley Regional Science Fair for "The Effects of Ocean Acidification on Rates of Photosynthesis and Overall Health of <em>Zostera marina</em>" (2019)</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
