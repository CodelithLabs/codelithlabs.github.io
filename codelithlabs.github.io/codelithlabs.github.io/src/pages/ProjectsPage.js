import React from 'react';
import '../styles/ProjectsPage.css';

const projects = [
  {
    title: 'Project One',
    status: 'Ongoing',
    description: 'A short description of the first project.',
  },
  {
    title: 'Project Two',
    status: 'Coming Soon',
    description: 'A short description of the second project.',
  },
  {
    title: 'Project Three',
    status: 'Coming Soon',
    description: 'A short description of the third project.',
  },
];

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h2>Our Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p><strong>Status:</strong> {project.status}</p>
            <p>{project.description}</p>
            <button className="cta-button">View Project</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
