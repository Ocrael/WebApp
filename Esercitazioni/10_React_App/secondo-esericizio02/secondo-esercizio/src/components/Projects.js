import React from 'react';

const Projects = ({ projects }) => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <ul>
                {projects && projects.map((project, index) => (
                    <li key={index}>{project}</li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;



        
        
        
        
        
    