import React from "react";

function ProjectItem({ name, about, technologies, id }) {

  const tech = technologies.map((technology) => {
    return (
      <span key={technology}>{technology}</span>
    )
  })

  return (
    <div key={id} className="project-item">
      
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
