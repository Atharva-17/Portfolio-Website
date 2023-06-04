import React from 'react'
import './edu.css';

function Edu() {
  return (
    <>
    <section id='about'>
    <div className='hero__main' data-aos="fade-up">
      <label htmlFor="" className="edu__title">About</label>
      <p className='edu__p'>I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.</p>
    <div className='main__edu'>
   <div class="work" data-aos="fade-up">
      <h3>
      
        Education</h3>
      <ul>
        <li><span>Bachelor’s of Engineering – CSE</span><small>Shri Ramdeobaba College of Engineering, Nagpur</small><small>2019 - 2023</small></li>
        <li><span>Class 12</span><small>Santaji Mahavidyalaya, Nagpur</small><small>2017 - 2019</small></li>
        <li><span>Class 10</span><small>TBRAN's Mundle English Medium School</small><small>2010 - 2017</small></li>
        
      </ul>
    </div>
    <div class="edu">
      <h3>
        
        Experience</h3>
      <ul>
        <li><span>Freelance Work</span><small>Projects</small><small>2021 - Present</small></li>
        <li><span>Web Developer Intern [Remote]</span><small>UFF Food Pvt. Ltd.</small><small>June 2021 - August 2021</small></li>
        <li><span>Web Developer</span><small>RCOEM Google Developer Student Club(GDSC)</small><small>August 2021 - Present</small></li>
        <li><span>Product Engineer Intern [Bangalore, KA]</span><small>OSlash(DemandWork Software Pvt. Ltd.)</small><small>December 2022 - Present</small></li>
        
      </ul>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Edu