// import React from 'react';

interface ProjectCardProps {
  src: string;
  link: string;
  h3: string;
  p: string;
}

function ProjectCard({ src, link, h3, p }: ProjectCardProps) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
