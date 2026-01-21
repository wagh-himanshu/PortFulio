// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Git'];

  return (
    <section className="section skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;