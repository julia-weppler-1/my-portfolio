
import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import HomePage from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Coursework from "./components/Coursework";

export default function App() {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setShowBackToTopBtn(true);
    } else if (scrolled <= 500) {
      setShowBackToTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="app-section" id="home">
        <HomePage />
      </div>
      <div className="app-section" id="about">
        <About />
      </div>
      <div className="app-section" id="projects">
        <Projects />
      </div>
      <div className="app-section" id="coursework">
        <Coursework />
      </div>
      <div className="app-section" id="resume">
        <Resume />
      </div>
      {showBackToTopBtn && (
        <div className="btn-back-to-top" onClick={scrollToTop}>
          <span>Back to Top</span>
        </div>
      )}
    </>
  );
}
