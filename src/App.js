import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Coursework from './components/Coursework';
import Projects from './components/Projects';
import './App.css';

const App = () => (
    <Router basename="/my-portfolio">
        <Header />
        <div className="container">
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/coursework" element={<Coursework />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    </Router>
);

export default App;
