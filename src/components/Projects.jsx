import React, { useContext } from 'react';
import "./projects.css";
import { ContextLanguage } from '../context/LanguageContexts';
import useDarkMode from '../hooks/useDarkMode';
import image1 from "../assets/img/project.png";
import image2 from "../assets/img/project-2.png";


const Projects = () => {
  const { content } = useContext(ContextLanguage);
  const [isDarkMode] = useDarkMode();

  const projectsData = [
    {
      id: 1,
      title: content.project1_title,
      description: content.project1_desc,
      image: image1,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ecemnur1414/pizza-challenge",
      live: "#"
    },
    {
      id: 2,
      title: content.project2_title,
      description: content.project2_desc,
      image: image2,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ecemnur1414/Todo-App",
      live: "#"
    },
    
  ];

  return (
    <div className={`projects ${isDarkMode ? 'dark-mode' : ''}`}> 
      <h2 className="projects-title">{content.projects}</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="projects-card">
            <img src={project.image} alt={project.title} className="projects-image" />
            <h3 className="projects-name">{project.title}</h3>
            <p className="projects-description">{project.description}</p>
            <div className="projects-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="projects-tag">{tag}</span>
              ))}
            </div>
            <div className="projects-links">
              <a href={project.github} className="projects-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} className="projects-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
