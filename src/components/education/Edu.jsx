import React from 'react'
import './edu.css';

function Edu() {
  return (
    <>
    <section id='about'>
    <div className='hero__main'>
    <div className='main__edu'>
   <div class="work">
      <h3><i class="fa fa-briefcase"></i>Experience</h3>
      <ul>
        <li><span>Technical Consultant -<br/>Web Design</span><small>Fiserv</small><small>Apr 2018 - Now</small></li>
        <li><span>Web Designer</span><small>Lynden</small><small>Jan 2018 - Apr 2018</small></li>
        <li><span>Intern - Web Design</span><small>Lynden</small><small>Aug 2017 - Dec 2017</small></li>
      </ul>
    </div>
    <div class="edu">
      <h3><i class="fa fa-graduation-cap"></i>Education</h3>
      <ul>
        <li><span>Bachelor of Science<br/>Web Design and Development</span><small>BYU-Idaho</small><small>Jan. 2016 - Apr. 2018</small></li>
        <li><span>Computer Science</span><small>Edmonds Community College</small><small>Sept. 2014 - Dec. 2015</small></li>
        <li><span>High School</span><small>Henry M. Jackson High School</small><small>Jan. 2013 - Jun. 2015</small></li>
      </ul>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Edu