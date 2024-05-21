import React from 'react';
import projectData from './projectApi';
import '../styles/projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            {projectData.map(project => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.name} className="project-image" />
                    <div className="project-details">
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-desc">{project.desc}</p>
                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">Learn More</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
