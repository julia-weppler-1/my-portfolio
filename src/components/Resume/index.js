import React from 'react';
import './index.css';

const Resume = () => {
    return (
        <div>
        <div className="resume-header">res<span>ume</span></div>
        <div className="resume-container">
            <div className="download-button">
                <a href={`${process.env.PUBLIC_URL}/Weppler Resume 25-26.pdf`} download="Weppler-Resume-2025.pdf">
                    Download Resume (PDF)
                </a>
            </div>
            <div className="pdf-viewer">
                <embed src={`${process.env.PUBLIC_URL}/Weppler Resume 25-26.pdf`} type="application/pdf" width="100%" height="100%" />
            </div>
        </div>
        </div>
    );
};

export default Resume;