import React, { useEffect, useMemo, useRef, useState } from "react";
import "./index.css";

const projects = [
  {
    title:
      "Visualization Literacy in United States Classrooms: A Qualitative Analysis of State K–12 Learning Standards",
    category: "Northeastern University | Research Apprenticeship | Conditional Acceptance to IEEE VIS 2026",
    description:
      "I was fortunate to be accepted into Northeastern University's Khoury College Research Apprenticeship Program for the Spring 2026 semester, through which I had the opportunity to work under Dr. Michelle Borkin and Mackenzie Creamer in the Khoury Visualization Lab. Our research explored how visualization literacy — the ability to read and interpret graphical displays of data — is represented in K–12 learning standards across the United States, collecting and analyzing over 5,000 visualization-related standards from a representative 20 states. I contributed to the qualitative coding and thematic analysis pipeline, helping to identify patterns in the tasks and visual idioms students are expected to learn across grade levels. As of July 2026, this work was conditionally accepted to the IEEE VIS 2026 poster session. The full work will be submitted to ACM CHI 2027.",
    image: [
      {
        url: `${process.env.PUBLIC_URL}/IEEE_VisLit_poster.pdf`,
        description:
          "Research poster submitted to IEEE VIS 2026 poster session, summarizing the methodology, dataset, and preliminary findings from a qualitative analysis of K–12 visualization literacy standards across the United States.",
      },
    ],
    video: {},
    githubLink: "",
    glitchLink: "",
    reportLink: "",
    pdfFile: "IEEE_VisLit_poster_manuscript.pdf",
  },
  {
    title:
      "Sparse Sensor Placement for Dissolved Oxygen Monitoring in the Gulf of Mexico Using Genetic Algorithms",
    category: "Northeastern University | Foundations of AI",
    description:
      "I developed a genetic algorithm pipeline to solve the sparse sensor placement problem for dissolved oxygen monitoring in the Gulf of Mexico, determining which spatial grid locations best enable reconstruction of the broader water-quality field under a fixed sensor budget. Working with real-world observational data from the Gulf Coast Ocean Observing System, including substantial missing values and irregular temporal coverage, I implemented and evaluated the algorithm across two spatial resolutions and six budget levels, comparing performance against a random placement baseline. My results showed that the genetic algorithm consistently outperformed random placement by 33–56% in reconstruction error across all configurations, demonstrating that even under imperfect real-world data conditions, optimization can meaningfully guide environmental monitoring network design.",
    image: [
      {
        url: `${process.env.PUBLIC_URL}/fig1_RMSE_budget1.png`,
        description:
          "At 15km resolution, the genetic algorithm (solid line) outperforms random sensor placement (dashed line) by 33–51% across all budget levels. While random placement shows little improvement as more sensors are added, the GA's reconstruction error drops steadily, reaching 0.787 mg/L at an 80% sensor budget.",
      },
      {
        url: `${process.env.PUBLIC_URL}/fig1_RMSE_budget2.png`,
        description:
          "At 25km resolution, the genetic algorithm achieves 38–56% lower reconstruction error than random placement, with the gap widening at higher budgets. The coarser grid yields lower absolute error overall, likely because averaging observations into larger cells smooths local noise and simplifies the spatial field.",
      },
      {
        url: `${process.env.PUBLIC_URL}/fig2_convergence_informed.png`,
        description:
          "GA convergence curves when half the initial population is seeded with high-variance sensor locations. This informed initialization gives the algorithm a head start, producing faster early improvement, especially at lower sensor budgets, before stabilizing at a final solution.",
      },
      {
        url: `${process.env.PUBLIC_URL}/fig2_convergence_uninformed.png`,
        description:
          "GA convergence curves when the entire initial population is randomly initialized. The algorithm still reliably finds strong solutions across all 12 configurations, but takes more generations to converge compared to informed seeding, particularly at lower budgets.",
      },
      {
        url: `${process.env.PUBLIC_URL}/fig3_placement1.png`,
        description:
          "GA-selected sensor locations at 30% and 70% budgets overlaid on mean dissolved oxygen concentration across the 15km grid. At 30%, sensors cluster in the high-DO upper-left corner; at 70%, coverage expands across the full monitoring region.",
      },
      {
        url: `${process.env.PUBLIC_URL}/fig3_placement2.png`,
        description:
          "GA-selected sensor locations at 30% and 70% budgets on the coarser 25km grid. The same spatial prioritization pattern emerges — high-DO boundary cells are selected first, with the southern and eastern portions filled in as the budget grows.",
      },
      {
        url: `${process.env.PUBLIC_URL}/fig4_monthly_rmse1.png`,
        description:
          "Distribution of reconstruction error across 12 held-out test months at each sensor budget level for the 15km grid. Higher budgets reduce both the median error and the spread, though some months remain harder to reconstruct even with more sensors.",
      },
      {
        url: `${process.env.PUBLIC_URL}/fig4_monthly_rmse2.png`,
        description:
          "Distribution of per-month reconstruction error at each budget level for the 25km grid. The narrowing interquartile range with increasing budget is especially pronounced here, indicating that the coarser grid produces more consistently accurate reconstructions as sensor count grows.",
      },
    ],
    video: {},
    githubLink: "https://github.com/julia-weppler-1/CS5100-Final-Project",
    glitchLink: "",
    reportLink: "",
    pdfFile: "CS5100_FINAL_JULIA_WEPPLER.pdf",
  },
  {
    title: "TRACE: Visualizing Parent-Child Physiological Concordance",
    category: "Northeastern University | Information Visualization",
    description:
      "The goal of this project was to develop a dashboard that provides clinicians with a tool to communicate meaningful information to parents about their interactions during recorded interactions between parents and children with autism. This project was built in in collaboration with factulty from the Northeastern Vis Lab, Bouvé College of Health Sciences, and University of Kansas Medical Center with intended submission to EuroVis 2027. To learn more about the report behind the dashboard, click ",
    image: [],
    video: {
      url: `${process.env.PUBLIC_URL}/synchro-demo.mp4`,
      caption: "A quick overview of the dashboard built with Plotly Dash.",
    },
    githubLink: "https://github.com/julia-weppler-1/SynchronyVisDashboard",
    glitchLink: "",
    reportLink:
      "https://julia-weppler-1.github.io/Barry-Weppler-CS7250-Final-Project/",
    pdfFile: "Visualizing-Synchrony.pdf",
  },
  {
    title: "Fair Fossil Fuel Extraction Phasout Calculator (F3-EPO)",
    category: "Stockholm Environment Institute",
    description:
      "I built F3-EPO as part of my internship for the Stockholm Environment Institute. The frontend was created using React and D3, and the backend was created using a LAMP stack + R script for the calculations. To learn more about the report behind the dashboard, click ",
    image: [],
    video: {
      url: `${process.env.PUBLIC_URL}/F3-EPO-DEMO.web.mp4`,
      caption: "Short demo walk-through, as the site is still in beta.",
    },
    githubLink: "",
    reportLink: "https://www.equityreview.org/extraction-equity-2023",
    glitchLink: "",
  },
  {
    title: "Personal Portfolio Website",
    category: "Personal Project",
    description:
      "This personal portfolio website was built with React to showcase my projects, skills, and resume.",
    image: [],
    githubLink: "https://github.com/julia-weppler-1/my-portfolio",
    glitchLink: "",
  },
  {
    title: "Excel Add-in for Policy Research Database",
    category: "Stockholm Environment Institute | Climate Policy Group",
    description:
      "As part of my internship at SEI, I modernized a large research database previously maintained in a shared Excel workbook by migrating it to an Azure SQL backend with a hybrid relational/EAV schema, enabling capabilities beyond Excel and improving cloud-based storage and synchronization. I then built a custom Excel Add-In for internal use at SEI that runs SQL queries to retrieve and update records directly from Excel, with version tracking to help resolve changes and prevent data loss.",
    image: [
      {
        url: `${process.env.PUBLIC_URL}/excel-login.png`,
        description:
          "Users are prompted to login after opening the add-in, which must be enabled on the user's computer by the system admin.",
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-login-2.png`,
        description:
          "Login is facilitated through Microsoft Authentication Library, and user role (read-only, read/write, custom SQL query access) is determined by the user's assigned role in Azure SQL.",
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-pull.png`,
        description:
          "After login verification, users can pull the desired views directly into their Excel workbook.",
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-push.png`,
        description:
          "If a user has write-access, they have the option to push their changes. The program will alert users to verify their intention to push a number of changes to different views.",
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-track-changes.png`,
        description:
          "The program also tracks user changes in order to prevent writing over un-pushed changes, or closing the program without pushing. This also helps confirm that the user is operating on the most recent version before pushing data, alerting users of merge conflicts.",
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-functions.png`,
        description:
          "All Excel functionality is preserved to support research workflows.",
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-sharepoint.png`,
        description:
          "Documents referenced in the database are automatically linked to the physical document stored in a Sharepoint site using a python script and Microsoft Graph API to enable referencing between the data and the original document.",
      },
      {
        url: `${process.env.PUBLIC_URL}/excel-sql.png`,
        description:
          "Certain users are granted access to perform custom, read-only queries for deeper analysis.",
      },
    ],
    githubLink: "",
    glitchLink: "",
  },
  {
    title: "Data Dashboard",
    category: "CSCI4911 - Readings in Computer Science",
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
          "Underneath is the graphs that the user selected, with a distinction of the source (survey questions versus characteristics). None of the graphs have been filtered yet. The user can also toggle between 3 graph types for each visual.",
      },
      {
        url: `${process.env.PUBLIC_URL}/data-dash-customize-view.png`,
        description: "",
      },
      {
        url: `${process.env.PUBLIC_URL}/data-dash-1-filter.png`,
        description:
          "Here is the same dashboard when a user clicks a bar to filter across all data with that response:",
      },
      {
        url: `${process.env.PUBLIC_URL}/data-dash-multiple-filters-tooltip.png`,
        description:
          "And again filtering using AND with another response. You can also see that each element in a graph has a tooltip for more precise information:",
      },
    ],
    githubLink: "https://github.com/julia-weppler-1/data-viz-dashboard.git",
    glitchLink: "",
  },
  {
    title: "EagleApps Planning",
    category: "CSCI3356 - Software Engineering",
    description:
      "Since the Boston College Course Info API is not deployed, I am unable to provide a link to the app. However, I can provide a link to the codebase. The app was built using Django, SQLite, and a custom API for app functionality, and Git for version control. Below is a walk-through of the application from the perspective of both a student and a department administrator. The main focus of the design choices was to make the application fit seamlessly into existing Boston College application platforms.",
    image: [
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Login.png`,
        description:
          "First, users will be prompted to login using Google SSO with their Boston College Credentials.",
      },
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Year-Select.png`,
        description:
          "Next, if they are a new user, they will be prompted to fill out the following information. They will not be able to continue without finishing the required fields.",
      },
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Progress.png`,
        description:
          "If they are a returning user, they will instead be brought to the landing page. If they already have courses in their plan, they will see their credit progress.",
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
          "If a user is an advisor, they will have student's associated to their account in the database. They will be able to see these students' plans and toggle through them on their \"Plan View\" page (the selected student's plan is empty). Information about what courses the student needs was not included in the MVP from the advisor's page as they should have that info already, but this should be included in future iterations.",
      },
      {
        url: `${process.env.PUBLIC_URL}/EagleApps-Dept-View.png`,
        description:
          "If a user is an administartor and would like a department-view, they will be able to see how many students have a class in their plan by semester and year, so that the University can estimate how many seats they will need for that course.",
      },
    ],
    githubLink: "https://github.com/julia-weppler-1/EagleApps",
    glitchLink: "",
  },
  {
    title: "Machine Learning Final Project",
    category: "CSCI3345 Machine Learning",
    description:
      "A final group project which aimed to model the factors contributing to hypoxia in the Cape Cod Bay, comparing the effectiveness of Logistic Regression and eXtreme Gradient Boosting. we found that our " +
      "XGBoost model with SMOTE and hyperparameter tuning achieved the highest recall at 0.913. Our Logistic Regression model also performed well with SMOTE and tuning, achieving a recall of 0.818. Both models outperformed " +
      "their respective baselines and yielded results comparable to other methods in related research.",
    image: [],
    githubLink: "https://github.com/trailorr/2025MLProject",
    glitchLink: "",
    pdfFile: "ML_Report.pdf",
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
    const dx =
      (e.changedTouches?.[0]?.clientX ?? startX.current) - startX.current;
    active.current = false;
    if (Math.abs(dx) < 30) return;
    if (dx < 0) onLeft?.();
    else onRight?.();
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
}

function VideoFrame({ video, title }) {
  if (!video?.url) return null;

  return (
    <div className="media-frame">
      <video
        className="project-video"
        controls
        preload="metadata"
        poster={video.poster}
        aria-label={`${title || "Project"} demo video`}
      >
        <source src={video.url} type={video.type || "video/mp4"} />
        Sorry — your browser doesn’t support embedded videos.
      </video>

      {video.caption && <div className="video-caption">{video.caption}</div>}
    </div>
  );
}

const isPdf = (url = "") => url.split("?")[0].toLowerCase().endsWith(".pdf");

function PdfSlide({ url, title }) {
  return (
    <div className="carousel-pdf-wrap">
      <object
        data={`${url}#view=FitH&navpanes=0`}
        type="application/pdf"
        className="carousel-pdf"
        aria-label={`${title || "Document"} — PDF viewer`}
      >
        <div className="pdf-fallback">
          <p>Your browser can’t display this PDF inline.</p>
          <a href={url} target="_blank" rel="noopener noreferrer">Open the poster in a new tab</a>
        </div>
      </object>
      <a className="pdf-open-link" href={url} target="_blank" rel="noopener noreferrer">Open full size ↗</a>
    </div>
  );
}

function ImageCarousel({ images, title }) {
  const slides = useMemo(() => (images || []).filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const clamp = (i) =>
    slides.length ? Math.max(0, Math.min(i, slides.length - 1)) : 0;
  const next = () => setIndex((i) => clamp(i + 1));
  const prev = () => setIndex((i) => clamp(i - 1));
  const goTo = (i) => setIndex(clamp(i));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const swipe = useSwipe(next, prev);
  const transform = `translateX(-${index * 100}%)`;
  const caption =
    slides[index]?.description ||
    `${title || "Slide"} — ${index + 1}/${slides.length}`;

  if (!slides.length) return null;

  return (
    <div className="media-frame">
      <div
        className="carousel-viewport"
        aria-label={`${title || "project"} image slider`}
        aria-roledescription="carousel"
      >
        <div className="carousel-track" style={{ transform }} {...swipe}>
          {slides.map((img, i) => (
            <div key={i} className="carousel-slide">
              {isPdf(img.url) ? (
                <PdfSlide url={img.url} title={title} />
              ) : (
                <img
                  src={img.url}
                  alt={`${title || "Slide"} — ${i + 1} of ${slides.length}`}
                  className="carousel-image"
                  draggable={false}
                />
              )}
            </div>
          ))}
        </div>

        <div className="carousel-overlay">
          <button
            className="carousel-button"
            aria-label="Previous image"
            onClick={prev}
          >
            ◀
          </button>
          <button
            className="carousel-button"
            aria-label="Next image"
            onClick={next}
          >
            ▶
          </button>
        </div>
      </div>

      <div className="carousel-caption-bar">
        <div className="carousel-caption" aria-live="polite" aria-atomic="true">
          {caption}
        </div>
        <span className="carousel-counter">
          {index + 1} / {slides.length}
        </span>
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`carousel-dot ${i === index ? "active" : ""}`}
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
                  className="report-link"
                >
                  here
                </a>
              )}
            </p>

            <div className="project-links">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.glitchLink && (
                <a
                  href={project.glitchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Glitch
                </a>
              )}
              {pdfUrl && (
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  View Paper (PDF)
                </a>
              )}
            </div>
            {project.video?.url && (
              <div className="project-images">
                <VideoFrame video={project.video} title={project.title} />
              </div>
            )}
            {!!project.image?.length && (
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