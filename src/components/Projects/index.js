import React from 'react';
import './index.css';

const projects = [
    {
        title: 'Personal Portfolio Website',
        category: 'Personal Project',
        description: 'This personal portfolio website was built with React to showcase my projects, skills, and resume.',
        image: [],
        githubLink: 'https://github.com/yourusername/portfolio',
        glitchLink: ''
    },
    {
        title: 'Scoring Assistant',
        category: 'Work - Independently Contracted',
        description: 'As a Help Desk Technician at Rock Gymnastics, I was asked if there was any way to make the process of scoring gymnasts in Excel quicker and easier. The gym owner was experiencing delays performing rankings on all of the gymnasts by category and level using one larger source file. Thus, I created Scoring Assistant to provide an input Excel file format and accept the filled out results. The program then processes the results and outputs a text file with the rankings for each gymnast for the user to print before reading off the scores. The program was built using Django. It is deployed only during competition season at the request of the client, so below is a display of the product.',
        image: [{url: `${process.env.PUBLIC_URL}/Scoring-Assistant.png`, description: ''}],
        githubLink: 'https://github.com/julia-weppler-1/ScoringAssistant.git',
        glitchLink: ''
    },
    {
        title: 'Data Visualization Projects',
        category: 'CS3390 - Data Visualization',
        description: 'Linked below is the Glitch playlist for all of the projects completed for the Data Visualization course. The focus of these projects were to demonstrate knowledge in design principles, data-driven story telling, Tableau, D3, and Vega-lite. As this class was completed before I had any formal learning in React develolment, Javascript, or css, the projects are not as polished as I would like. I plan to revisit these projects in the future to improve them.',
        image: [],
        githubLink: '',
        glitchLink: 'https://glitch.com/@jnweppler/csci-3390-projects'
    },
    {
        title: 'Data Dashboard',
        category: 'CSCI4911 - Readings in Computer Science',
        description: 'As the data used in the study was confidential, I am unable to provide a link to the dashboard. However, I can provide a link to the codebase, as well as display the data dashboard with mock-data. Not demonstrated in the images below is the use of animations to provide flow for the user, as well as the ability to filter the data by various categories.',
        image: [{url: `${process.env.PUBLIC_URL}/data-dash-filters.png`, description: 'First, you can see users have the option to add data views by source (survey questions versus characteristics), and modify the data included by year. They can also choose if the data is represented in percentages or counts, and specify AND versus OR based filtering when filtering by responses (Any versus All).'}, 
            {url: `${process.env.PUBLIC_URL}/data-dash-dot-plot.png`, description: 'Integrated in the dashboard is one correlogram-heatmap hybrid graph, where users can choose which x and y fields they\'d like to display. The component will then decipher if the relationship between these variables is significant by performing a chi-squared test.'},
            {url: `${process.env.PUBLIC_URL}/data-dash-bars-unfiltered.png`, description: 'Underneath is the graphs that the user selected, with a distinction of the source (survey questions versus characteristics). None of the graphs have been filtered yet. The user can also toggle between 3 graph types for each visual.'},
            {url: `${process.env.PUBLIC_URL}/data-dash-customize-view.png`, description: ''}, 
            {url: `${process.env.PUBLIC_URL}/data-dash-1-filter.png`, description: 'Here is the same dashboard when a user clicks a bar to filter across all data with that response:'}, 
            {url: `${process.env.PUBLIC_URL}/data-dash-multiple-filters-tooltip.png`, description: 'And again filtering using AND with another response. You can also see that each element imn a graph has a tooltip for more precise information:'}],
        githubLink: 'https://github.com/julia-weppler-1/data-viz-dashboard.git',
        glitchLink: ''
    },
    {
        title: 'EagleApps Planning',
        category: 'CSCI3356 - Software Engineering',
        description: 'Since the Boston College Course Info API is not deployed, I am unable to provide a link to the app. However, I can provide a link to the codebase. The app was built using Django, SQLite, and a custom API for app functionality, and Git for version control. Below is a walk-through of the application from the perspective of both a student and a department administrator. The main focus of the design choices was to make the application fit seamlessly into existing Boston College application platforms.',
        image: [{url: `${process.env.PUBLIC_URL}/EagleApps-Login.png`, description: 'First, users will be prompted to login using Google SSO with their Boston College Credentials.'},
                {url: `${process.env.PUBLIC_URL}/EagleApps-Year-Select.png`, description: 'Next, if they are a new user, they will be prompted to fill out the following information. They will not be able to continue without finishing the required fields.'},
                {url: `${process.env.PUBLIC_URL}/EagleApps-Progress.png`, description: 'If they are a returning user, they will instead be brought to the landing page. If they already have courses in their plan, they will see their credit progress.'},
                {url: `${process.env.PUBLIC_URL}/EagleApps-Plan-View-Student.png`, description: 'If they click on "Build Plan" on the menu above, they will be brought to the view of their plan. Students can have up to 3 plans to alternate between, and will receive suggestions for courses not yet taken based on their major. Additionally, they can add credits from AP classes, to account for requirements that can be fulfilled prior to starting college. Students currently must manually set classes as "Planned", "In Progress", or "Completed". The menu has been cut off from the screenshot to show the entire plan view.'},
                {url: `${process.env.PUBLIC_URL}/EagleApps-Course-Search.png`, description: 'Next, if the user navigates to "Search Courses", they will be able to find courses by department. In future work on this progress, it would be helpful to implement a fully-functional free-text search, though that was out of the scope of this project.'},
                {url: `${process.env.PUBLIC_URL}/EagleApps-Add-Course.png`, description: 'Students can add a desired course to thier plan by specifying what year and semester they\'d like to include it in.'},
                {url: `${process.env.PUBLIC_URL}/EagleApps-Plan-View.png`, description: 'If a user is an advisor, they will have student\'s associated to their account in the database. They will be able to see these students\' plans and toggle through them on their "Plan View" page (the selected student\'s plan is empty). Information about what courses the student needs was not included in the MVP from the advisor\'s page as they should have that info already, but this should be included in future iterations.'},
                {url: `${process.env.PUBLIC_URL}/EagleApps-Dept-View.png`, description: 'If a user is an administartor and would like a department-view, they will be able to see how many students have a class in their plan by semester and year, so that the University can estimate how many seats they will need for that course.'},
                ],
        githubLink: 'https://github.com/julia-weppler-1/EagleApps',
        glitchLink: ''
    },
    {
        title: 'Runnify',
        category: 'Personal Project - Coming Soon',
        description: 'Runnify is a running app that allows users to generate custom running paths based on the distance they\'d like to run and the elevation change they\'d like to experience. The application leverages Dijkstra\'s Algorithm, Machine Learning, and custom heuristics to provide multiple running path options for the user to avoid major roads and pace-disrupting traffic stops.',
        image: [],
        githubLink: '',
        glitchLink: ''
    },
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className="project-section">
                    <h2 className="project-title">{project.title}</h2>
                    <h3 className="project-category">{project.category}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-links">
                        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
                        {project.glitchLink && <a href={project.glitchLink} target="_blank" rel="noopener noreferrer">Glitch</a>}
                    </div>
                    {project.image.length > 0 && (
                        <div className="project-images">
                            {project.image.map((image, imgIndex) => (
                                <div key={imgIndex} className="project-image-container">
                                    {image.description && <p className="project-image-description">{image.description}</p>}
                                    <img src={image.url} alt={`${project.title} ${imgIndex + 1}`} className="project-image" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Projects;
