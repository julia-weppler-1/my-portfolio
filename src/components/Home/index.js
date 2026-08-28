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
            Northeastern University studying Computer Science with a focus in
            HCI and Data Visualization. Before Northeastern, I completed my
            Bachelors of Science at Boston College in Computer Science with a
            Minor in Environmental Studies, where I worked on coastal resilience
            and marine conservation alongside machine learning and visualization
            coursework.
          </p>
          <br></br>
          <p>
            My work since then has been fairly varied: a survey of visualization
            literacy in K–12, sensor placement optimization in the Gulf of
            Mexico, a clinical dashboard for physiological data, hazard layers
            for catastrophe risk at Liberty Mutual, policy and research tools at
            the Stockholm Environment Institute. A lot of it has been spatial,
            and most of it involved the same challenge, which was getting the
            results into a form the people who needed them could act on —
            clinicians, underwriters, planners. I'm interested in visualization
            systems, spatial data analysis, and what people actually take away
            from the things we build for them.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
