// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'A cool React app.', link: '#' },
    { title: 'Project 2', description: 'A Node.js backend.', link: '#' },
  ];

  return (
    <section className="section projects">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;