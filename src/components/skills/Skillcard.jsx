import React from 'react';
import './skills.css';

function Skillcard({skill}) {
  return (
    <>
    <section id='tech'>
    <div className="skill-card">
        <div className="skill-icon">{skill.icon}</div>
        <label htmlFor="" className="skill-name">{skill.name}</label>
    </div>
    </section>
    </>
  )
}

export default Skillcard;