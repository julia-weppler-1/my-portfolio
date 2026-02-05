
import React from 'react';
import './index.css';

const Coursework = () => {
    const courses = [    
        {
            code: 'CSCI3390',
            title: 'Data Visualization',
            description: 'This course covered the essential skills needed to understand and communicate data effectively via visuals. I studied the principles from graphic design, perceptual psychology, and cognitive science in order to create effective visualizations. The course emphasized the practical application of these principles through tools like Tableau and web-based frameworks such as D3.js and Vega-Lite.',
            work: 'Designed and created data-driven stories using visualizations to explore and present complex data sets. Developed interactive visualization products, including articles, tools, and systems. Acquired foundational knowledge on designing effective visualizations for analysis and presentation. All assignments submitted via Glitch.'
        },        
        {
            code: 'CSCI3356',
            title: 'Software Engineering',
            description: 'Studied software development methodologies, program lifecycles, project management, and quality assurance practices. Implemented software engineering principles to develop a software application in a team setting over the course of the semester.',
            work: 'Followed Agile development methodologeis to develop the Eagle Planning App for Boston College students and faculty to develop 4-year plans and anticipate course enrollment by semester. Utilized Django, SQLite, and a custom API for app functionality, and Git for version control.'
        },
        {
            code: 'CSCI4911',
            title: 'Readings in Computer Science',
            description: 'Chosen as 1 of 2 students to study under Professor Nam Wook Kim and aid him in the development of an interactive data dashboard for the university. The project involved creating reusable charting components to visualize various datasets and building a modularized dashboard that could be reused for different use cases.',
            work: 'Utilized React and D3.js to create an interactive and customizable data dashboard with coordinated components. Applied design principles to ensure the dashboard was user-friendly and visually appealing.'
        },
        {
            code: 'CSCI3345',
            title: 'Machine Learning',
            description: 'Introduced core concepts in supervised and unsupervised learning, including regression, classification, clustering, and feature selection. Emphasized model evaluation metrics such as accuracy, precision, recall, and F1-score, and explored modern algorithms including neural networks, decision trees, and ensemble methods.',
            work: 'Completed a group project comparing linear regression and XGBoost models for predicting eutrophication in Cape Cod Bay using buoy monitor data. Evaluated model performance based on accuracy, precision, and recall to determine the most effective approach for forecasting nutrient enrichment.'
        },
        {
            code: 'ENVS4943',
            title: 'Senior Seminar and Thesis',
            description: 'A capstone course for the Environmental Studies minor, integrating scientific analysis, policy considerations, and sustainability research. Focused on applying data science techniques to environmental forecasting and ecosystem modeling.',
            work: 'Completed a senior thesis forecasting the impacts of temperature and pH on areal coverage of eelgrass (Zostera marina) using XGBoost. Developed predictive models to assess ecological vulnerability under future climate scenarios, contributing to sustainable coastal management research.'
        },
        {
            code: 'CS7250',
            title: 'Information Visualization',
            description: 'An advanced exploration of data visualization theory and design, emphasizing interactivity, human-centered design, and storytelling through data. Covered visualization frameworks, cognitive principles, and best practices for communicating complex information effectively.',
            work: 'Partnered with Northeastern’s Center for Community Engaged Teaching and Research to analyze and visualize data on community outreach efforts, identifying opportunities for improved engagement and impact communication. Additionally, developed an interactive dashboard using Plotly Dash to visualize physiologic synchrony between children with autism and their parents, enhancing patient understanding of complex health data.'
        }
        
    ];

    return (
        <div>
            <div className="section-header">cour<span>sework</span></div>
            <ul className="course-list">
                {courses.map((course, index) => (
                    <li key={index} className="course-item">
                        <h3>{course.code}: {course.title}</h3>
                        <p><strong>Description:</strong> {course.description}</p>
                        <p><strong>Work Done:</strong> {course.work}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Coursework;
