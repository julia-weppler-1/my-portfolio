
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./index.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-left">
      </div>
      <div className="navbar-right-menubar">
        {isMenuOpen ? (
          <div className="navbar-menu-options">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              home
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              about
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              projects
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              coursework
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="resume"
              spy={true}
              smooth={true}
              duration={500}
            >
              resume
            </Link>
          </div>
        ) : (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </div>
      <div className="navbar-right-options">
        <Link to="home" spy={true} smooth={true} duration={500}>
          home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          about
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          projects
        </Link>
        <Link to="coursework" spy={true} smooth={true} duration={500}>
          coursework
        </Link>
        <Link to="resume" spy={true} smooth={true} duration={500}>
          resume
        </Link>
      </div>
    </div>
  );
};

export default Header;
