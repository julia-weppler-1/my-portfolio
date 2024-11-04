
import React from 'react';
import './index.css';

const Coursework = () => {
    const courses = [
        {
            code: 'CSCI1101 and CSCI 1102',
            title: 'Computer Science I and II',
            description: 'Introduced to the fundamentals of computer science and programming concepts. Covered object-oriented programming, data types, control structures, and functions.',
            work: 'Developed simple programs in Python and Java to solve various computational problems.'
        },
        {
            code: 'CSCI2271',
            title: 'Computer Systems',
            description: 'Studied how computing machines implement the human-friendly abstractions we express in our programs, the internal representations of data and instructions, the management of data storage in memory, and the interactions between operating systems and the programs being executed.',
            work: 'Engaged in extensive coding exercises using the C programming language to understand system-level programming. Worked on projects that involved optimizing program performance, managing data storage in memory, and debugging at the systems level.'
        },        
        {
            code: 'CSCI3390',
            title: 'Data Visualization',
            description: 'This course covered the essential skills needed to understand and communicate data effectively via visuals. I studied the principles from graphic design, perceptual psychology, and cognitive science in order to create effective visualizations. The course emphasized the practical application of these principles through tools like Tableau and web-based frameworks such as D3.js and Vega-Lite.',
            work: 'Designed and created data-driven stories using visualizations to explore and present complex data sets. Developed interactive visualization products, including articles, tools, and systems. Acquired foundational knowledge on designing effective visualizations for analysis and presentation. All assignments submitted via Glitch.'
        },        
        {
            code: 'CSCI3383',
            title: 'Algorithms and Data Structures',
            description: 'Gained in-depth knowledge of data structures and algorithms and their applications in solving complex problems. Learned about how to optimize runtimes, the implications of space complexity, and how to choose the right data structure for a given problem.',
            work: 'Implemented various data structures (DAGs, trees, etc) and algorithms (e.g., sorting, searching) in Java.'
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
            code: 'MATH2210',
            title: 'Linear Algebra',
            description: 'Explored vector spaces, linear transformations, eigenvalues, eigenvectors, and their applications in various fields. The course emphasized the foundational role of linear algebra in machine learning and data science.',
            work: 'Worked on solving systems of linear equations, performing matrix operations, and understanding vector space theory.'
        }
        
    ];

    return (
        <div>
            <div className="coursework-title">cour<span>sework</span></div>
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
