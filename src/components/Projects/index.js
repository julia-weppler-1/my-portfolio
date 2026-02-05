import React, { useEffect, useMemo, useRef, useState } from 'react';
import './index.css';

const projects = [
    {
    title: '',
    category: 'Northeastern University | Information Visualization',
    description: "The goal of this project was to develop a dashboard that provides clinicians with a tool to communicate meaningful information to parents about their interactions during the session. This project was built in in collaboration with factulty from the Northeastern Vis Lab, Bouvé College of Health Sciences, and University of Kansas Medical Center with intended submission to ACM CHI 2027. To learn more about the report behind the dashboard, click ",
    image: [],
    video: {
      url: `${process.env.PUBLIC_URL}/synchro-demo.mp4`,
      caption: 'A quick overview of the dashboard built with Plotly Dash.',      
    },
    githubLink: 'https://github.com/julia-weppler-1/SynchronyVisDashboard',
    glitchLink: '',
    reportLink: 'https://julia-weppler-1.github.io/Barry-Weppler-CS7250-Final-Project/',
    pdfFile: 'Visualizing-Synchrony.pdf', 
  },
  {
    title: 'Fair Fossil Fuel Extraction Phasout Calculator (F3-EPO)',
    category: 'Stockholm Environment Institute',
    description: "I built F3-EPO as part of my internship for the Stockholm Environment Institute. The frontend was created using React and D3, and the backend was created using a LAMP stack + R script for the calculations. To learn more about the report behind the dashboard, click ",
    image: [],
    video: {
      url: `${process.env.PUBLIC_URL}/F3-EPO-DEMO.web.mp4`,
      caption: 'Short demo walk-through, as the site is still in beta.',      
    },
    githubLink: '',
    reportLink: 'https://www.equityreview.org/extraction-equity-2023',
    glitchLink: '',
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Personal Project',
    description:
      'This personal portfolio website was built with React to showcase my projects, skills, and resume.',
    image: [],
    githubLink: 'https://github.com/julia-weppler-1/my-portfolio',
    glitchLink: '',
  },
    {
    title: 'Excel Add-in for Policy Research Database',
    category: 'Stockholm Environment Institute | Climate Policy Group',
    description: "As part of my internship at SEI, I modernized a large research database previously maintained in a shared Excel workbook by migrating it to an Azure SQL backend with a hybrid relational/EAV schema, enabling capabilities beyond Excel and improving cloud-based storage and synchronization. I then built a custom Excel Add-In for internal use at SEI that runs SQL queries to retrieve and update records directly from Excel, with version tracking to help resolve changes and prevent data loss.",
    image: [
      {
        url: `${process.env.PUBLIC_URL}/excel-login.png`,
        description:
        "Users are prompted to login after opening the add-in, which must be enabled on the user's computer by the system admin."
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-login-2.png`,
        description:
        "Login is facilitated through Microsoft Authentication Library, and user role (read-only, read/write, custom SQL query access) is determined by the user's assigned role in Azure SQL."
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-pull.png`,
        description:
        "After login verification, users can pull the desired views directly into their Excel workbook."
      },
      { url: `${process.env.PUBLIC_URL}/excel-push.png`, 
        description: "If a user has write-access, they have the option to push their changes. The program will alert users to verify their intention to push a number of changes to different views." 
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-track-changes.png`,
        description:
        "The program also tracks user changes in order to prevent writing over un-pushed changes, or closing the program without pushing. This also helps confirm that the user is operating on the most recent version before pushing data, alerting users of merge conflicts."
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-functions.png`,
        description:
        "All Excel functionality is preserved to support research workflows."
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-sharepoint.png`,
        description:
        "Documents referenced in the database are automatically linked to the physical document stored in a Sharepoint site using a python script and Microsoft Graph API to enable referencing between the data and the original document."
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-sql.png`,
        description:
        "Certain users are granted access to perform custom, read-only queries for deeper analysis."
      },
    ],
    githubLink: '',
    glitchLink: '',
  },
  {
    title: 'Data Dashboard',
    category: 'CSCI4911 - Readings in Computer Science',
    description:
      "As the data used in the study was confidential, I am unable to provide a link to the dashboard. However, I can provide a link to the codebase, as well as display the data dashboard with mock-data. Not demonstrated in the images below is the use of animations to provide flow for the user, as well as the ability to filter the data by various categories.",
    image: [
      {
        url: `${process.env.PUBLIC_URL}/data-dash-filters.png`,
        description:
          "First, you can see users have the option to add data views by source (survey questions versus characteristics), and modify the data included by year. They can also choose if the data is represented in percentages or counts, and specify AND versus OR based filtering when filtering by responses (Any versus All).",
      },
      {
        url: `${process.env.PUBLIC_URL}/data-dash-dot-plot.png`,
        description:
          "Integrated in the dashboard is one correlogram-heatmap hybrid graph, where users can choose which x and y fields they'd like to display. The component will then decipher if the relationship between these variables is significant by performing a chi-squared test.",
      },
      {
        url: `${process.env.PUBLIC_URL}/data-dash-bars-unfiltered.png`,
        description:
          'Underneath is the graphs that the user selected, with a distinction of the source (survey questions versus characteristics). None of the graphs have been filtered yet. The user can also toggle between 3 graph types for each visual.',
      },
      { url: `${process.env.PUBLIC_URL}/data-dash-customize-view.png`, description: '' },
      {
        url: `${process.env.PUBLIC_URL}/data-dash-1-filter.png`,
        description:
          'Here is the same dashboard when a user clicks a bar to filter across all data with that response:',
      },
      {
        url: `${process.env.PUBLIC_URL}/data-dash-multiple-filters-tooltip.png`,
        description:
          'And again filtering using AND with another response. You can also see that each element in a graph has a tooltip for more precise information:',
      },
    ],
    githubLink: 'https://github.com/julia-weppler-1/data-viz-dashboard.git',
    glitchLink: '',
  },
  {
    title: 'EagleApps Planning',
    category: 'CSCI3356 - Software Engineering',
    description:
      'Since the Boston College Course Info API is not deployed, I am unable to provide a link to the app. However, I can provide a link to the codebase. The app was built using Django, SQLite, and a custom API for app functionality, and Git for version control. Below is a walk-through of the application from the perspective of both a student and a department administrator. The main focus of the design choices was to make the application fit seamlessly into existing Boston College application platforms.',
    image: [
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Login.png`,
        description:
          'First, users will be prompted to login using Google SSO with their Boston College Credentials.',
      },
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Year-Select.png`,
        description:
          'Next, if they are a new user, they will be prompted to fill out the following information. They will not be able to continue without finishing the required fields.',
      },
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Progress.png`,
        description:
          'If they are a returning user, they will instead be brought to the landing page. If they already have courses in their plan, they will see their credit progress.',
      },
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Plan-View-Student.png`,
        description:
          'If they click on "Build Plan" on the menu above, they will be brought to the view of their plan. Students can have up to 3 plans to alternate between, and will receive suggestions for courses not yet taken based on their major. Additionally, they can add credits from AP classes, to account for requirements that can be fulfilled prior to starting college. Students currently must manually set classes as "Planned", "In Progress", or "Completed". The menu has been cut off from the screenshot to show the entire plan view.',
      },
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Course-Search.png`,
        description:
          'Next, if the user navigates to "Search Courses", they will be able to find courses by department. In future work on this progress, it would be helpful to implement a fully-functional free-text search, though that was out of the scope of this project.',
      },
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Add-Course.png`,
        description:
          "Students can add a desired course to thier plan by specifying what year and semester they'd like to include it in.",
      },
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Plan-View.png`,
        description:
          'If a user is an advisor, they will have student\'s associated to their account in the database. They will be able to see these students\' plans and toggle through them on their "Plan View" page (the selected student\'s plan is empty). Information about what courses the student needs was not included in the MVP from the advisor\'s page as they should have that info already, but this should be included in future iterations.',
      },
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Dept-View.png`,
        description:
          'If a user is an administartor and would like a department-view, they will be able to see how many students have a class in their plan by semester and year, so that the University can estimate how many seats they will need for that course.',
      },
    ],
    githubLink: 'https://github.com/julia-weppler-1/EagleApps',
    glitchLink: '',
  },
  {
    title: 'Environmental Studies Thesis',
    category: 'ENVS Program - Boston College',
    description:
      'My Environmental Studies thesis completed at Boston College. This PDF includes the full write-up of my research, analysis, and findings.',
      image: [
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide1.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide2.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide3.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide4.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide5.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide6.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide7.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide8.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide9.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide10.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide11.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide12.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide13.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide14.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide15.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide16.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide17.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide18.png`,
          description: ''
        },
        {
          url: `${process.env.PUBLIC_URL}/ENVS_Pres/Slide19.png`,
          description: ''
        },
      ],
    githubLink: '',
    glitchLink: '',
    pdfFile: 'ENVS_Thesis.pdf', 
  },
  {
    title: 'Machine Learning Final Project',
    category: 'CSCI3345 Machine Learning',
    description:
      'A final group project which aimed to model the factors contributing to hypoxia in the Cape Cod Bay, comparing the effectiveness of Logistic Regression and eXtreme Gradient Boosting. we found that our '
      + 'XGBoost model with SMOTE and hyperparameter tuning achieved the highest recall at 0.913. Our Logistic Regression model also performed well with SMOTE and tuning, achieving a recall of 0.818. Both models outperformed '
      + 'their respective baselines and yielded results comparable to other methods in related research.',
      image: [],
    githubLink: 'https://github.com/trailorr/2025MLProject',
    glitchLink: '',
    pdfFile: 'ML_Report.pdf', 
  },
];

function useSwipe(onLeft, onRight) {
  const startX = useRef(0);
  const startY = useRef(0);
  const active = useRef(false);

  const onTouchStart = (e) => {
    if (!e.touches?.length) return;
    active.current = true;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };
  const onTouchMove = (e) => {
    if (!active.current) return;
    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;
    if (Math.abs(dx) > Math.abs(dy)) e.preventDefault(); 
  };
  const onTouchEnd = (e) => {
    if (!active.current) return;
    const dx = (e.changedTouches?.[0]?.clientX ?? startX.current) - startX.current;
    active.current = false;
    if (Math.abs(dx) < 30) return;
    if (dx < 0) onLeft?.();
    else onRight?.();
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
}


function VideoFrame({ video, title }) {
  if (!video?.url) return null;

  const st = {
    wrap: {
      background: '#FAF9F6',
      borderRadius: 16,
      padding: 16,
    },
    video: { width: '100%', borderRadius: 12, display: 'block', background: '#0f1115' },
    caption: { marginTop: 10, fontSize: 14, color: '#94a3b8', lineHeight: 1.45 },
  };

  return (
    <div style={st.wrap}>
      <video
        style={st.video}
        controls
        preload="metadata"
        poster={video.poster}
        aria-label={`${title || 'Project'} demo video`}
      >
        <source src={video.url} type={video.type || 'video/mp4'} />
        Sorry — your browser doesn’t support embedded videos.
      </video>

      {video.caption && <div style={st.caption}>{video.caption}</div>}
    </div>
  );
}

function ImageCarousel({ images, title }) {
  const slides = useMemo(() => (images || []).filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const clamp = (i) => (slides.length ? Math.max(0, Math.min(i, slides.length - 1)) : 0);
  const next = () => setIndex((i) => clamp(i + 1));
  const prev = () => setIndex((i) => clamp(i - 1));
  const goTo = (i) => setIndex(clamp(i));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const swipe = useSwipe(next, prev);
  const transform = `translateX(-${index * 100}%)`;
  const caption = slides[index]?.description || `${title || 'Slide'} — ${index + 1}/${slides.length}`;

  if (!slides.length) return null;

  const st = {
    wrap: { background: '#FAF9F6', borderRadius: 16, padding: 16},
    viewport: { position: 'relative', overflow: 'hidden', borderRadius: 12 },
    track: {
      display: 'flex',
      transform,
      transition: 'transform 400ms ease',
      touchAction: 'pan-y',
      userSelect: 'none',
      WebkitUserDrag: 'none',
      willChange: 'transform',
    },
    slide: { minWidth: '100%', display: 'grid', placeItems: 'center', background: '#FAF9F6' },
    img: { width: '100%', height: 'auto', objectFit: 'contain', display: 'block' },
    ctrlBtn: {
      background: '#FAF9F6',
      color: '#121212',
      padding: '8px 10px',
      borderRadius: 999,
      cursor: 'pointer',
      backdropFilter: 'blur(4px)',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 8,
      pointerEvents: 'none',
    },
    captionBar: { display: 'flex', alignItems: 'center', gap: 12, marginTop: 12, flexWrap: 'wrap' },
    caption: { fontSize: 14, color: '#12121289', lineHeight: 1.45, flex: 1 },
    dots: { display: 'flex', gap: 6, alignItems: 'center', justifyContent: 'center', marginTop: 10, flexWrap: 'wrap' },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#a78bfa55',
      border: 'none',
      cursor: 'pointer',
    },
    dotActive: { width: 26, background: '#a78bfa' },
  };

  return (
    <div style={st.wrap}>
      <div style={st.viewport} aria-label={`${title || 'project'} image slider`} aria-roledescription="carousel">
        <div style={st.track} {...swipe}>
          {slides.map((img, i) => (
            <div key={i} style={st.slide}>
              <img
                src={img.url}
                alt={`${title || 'Slide'} — ${i + 1} of ${slides.length}`}
                style={st.img}
                draggable={false}
              />
            </div>
          ))}
        </div>

        <div style={st.overlay}>
          <button style={{ ...st.ctrlBtn, pointerEvents: 'auto' }} aria-label="Previous image" onClick={prev}>
            ◀
          </button>
          <button style={{ ...st.ctrlBtn, pointerEvents: 'auto' }} aria-label="Next image" onClick={next}>
            ▶
          </button>
        </div>
      </div>

      <div style={st.captionBar}>
        <div style={st.caption} aria-live="polite" aria-atomic="true">
          {caption}
        </div>
        <span style={{ fontSize: 12, color: '#12121289' }}>
          {index + 1} / {slides.length}
        </span>
      </div>

      <div style={st.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            style={{ ...st.dot, ...(i === index ? st.dotActive : null) }}
          />
        ))}
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="section-header">
        pro<span>jects</span>
      </div>

      {projects.map((project, index) => {
        const pdfUrl = project.pdfFile
          ? `${process.env.PUBLIC_URL}/${project.pdfFile}`
          : null;

        return (
          <div key={index} className="project-section">
            <h2 className="project-title">{project.title}</h2>
            <h3 className="project-category">{project.category}</h3>
            <p className="project-description">
              {project.description}
              {project.reportLink && (
                <a
                  href={project.reportLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: 4, color: '#9b61ff' }}
                >
                  here
                </a>
              )}
            </p>

            <div className="project-links">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.glitchLink && (
                <a href={project.glitchLink} target="_blank" rel="noopener noreferrer">
                  Glitch
                </a>
              )}
              {pdfUrl && (
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  View Thesis (PDF)
                </a>
              )}
            </div>
            {project.video?.url && (
              <div className="project-images">
                <VideoFrame video={project.video} title={project.title} />
              </div>
            )}
            {!!project.image.length && (
              <div className="project-images">
                <ImageCarousel images={project.image} title={project.title} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};


export default Projects;
