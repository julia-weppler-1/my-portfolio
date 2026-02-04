import React from "react";
import "./index.css";
import Header from "../Header/index";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Header />
      </div>
      <div className="home-page">
        <div>
          <span>julia</span>
          <p>
            <span> weppler</span>
          </p>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/selfie.jpeg`} alt="Profile" className="profile-picture" />
      <div className="home-page-footer">
        <a
          href="https://github.com/julia-weppler-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="link-button">github</div>
        </a>
        <a
          href="https://www.linkedin.com/in/julia-weppler-022561277"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="link-button">linkedin</div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
