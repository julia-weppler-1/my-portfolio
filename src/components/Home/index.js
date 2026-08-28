import React from "react";
import "./index.css";
import Header from "../Header";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-page-header">
        <Header />
      </header>

      <main className="home-page-content">
        <aside className="home-page-sidebar">
          <div className="home-page-title">
            <span>julia</span>
            <span className="last-name">weppler</span>
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/selfie.jpeg`}
            alt="Julia Weppler"
            className="profile-picture"
          />

          <nav className="social-links">
            <a
              href="https://github.com/julia-weppler-1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              github
            </a>

            <a
              href="https://www.linkedin.com/in/julia-weppler-022561277"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              linkedin
            </a>
          </nav>
        </aside>

        <section className="home-page-main">
          <p>
            Hello! My name is Julia Weppler, and I am a masters student at
            Northeastern University (4.0 GPA) studying Computer Science with a
            focus in HCI and Data Visualization. Before Northeastern, I
            completed my Bachelors of Science at Boston College in Computer
            Science with a Minor in Environmental Studies (3.78 GPA). I was able
            to explore my passions for conservation, coastal resilience,
            software engineering, and data visualization through courses like
            Marine Conservation (ENVS 3322), Data Visualization (CSCI 3390),
            Machine Learning (CSCI 3345), and my senior thesis (ENVS 4943).
          </p>
          <br></br>
          <p>
            As I progressed through my studies at BC and applied my knowledge in
            professional settings, I found myself repetitively asking "How will this be
            interacted with and understood?" Through these experiences I built a
            technical foundation spanning full-stack development (Python,
            JavaScript, React, Node.js), data visualization (D3, Vega, Tableau),
            spatial tools (Esri ArcGIS), and cloud platforms (Azure,
            Databricks, MongoDB, and SQL). I am excited to leverage this background and
            my curiosity to continue investigating ways to make human-computer
            interactions and relationships more cohesive through my masters at
            Northeastern. Specifically, I'm interested in exploring the ways in
            which we facilitate access to powerful computing tools and complex
            spatial data, and how these methods can be improved to help drive
            further action and increase awareness around the ongoing climate
            crisis. Ultimately, my mission is to contribute to interdisciplinary
            HCI knowledge by designing methods and systems in which we can most
            effectively communicate the issues our society faces.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
