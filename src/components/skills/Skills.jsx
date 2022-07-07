import React from 'react'
import './skills.css'
import {  SkillsData } from './skilldata'
import Skillcard from './Skillcard';

function Skills() {
  const data =  SkillsData;
  return (
    <>
    <div className='skills'>
      <label htmlFor="" className="section-title">Technologies</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label htmlFor="" className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill)=>{
                  return(
                     <Skillcard skill={skill} />
                  )
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default Skills