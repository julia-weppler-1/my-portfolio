import React from 'react';
import './index.css';
const Resume = () => {
    return (
        <div className="resume-container">
            <h2>Resume</h2>
            <p>View and download my resume:</p>
            <div style={{ width: '100%', height: '800px', overflow: 'auto' }}>
                <embed src="/Weppler Resume 2025.pdf" type="application/pdf" width="100%" height="100%" />
            </div>
            <p>
                <a href="/Weppler Resume 2025.pdf" download="Weppler Resume 2025.pdf">
                    Download Resume (PDF)
                </a>
            </p>
        </div>
        
    );
};

export default Resume;
