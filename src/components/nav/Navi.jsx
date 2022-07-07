import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {useState} from 'react';

function Navi() {
    const [activeNav,setActiveNav] = useState('#');
  return (
     <>
     <nav>
        <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav==='#home' ? 'active' : ''}><AiOutlineHome/><div className='tooltip'>Home</div></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/><div className='tooltip'>About</div></a>
        <a href="#tech" onClick={()=> setActiveNav('#tech')} className={activeNav==='#tech' ? 'active' : ''}><BiBook/><div className='tooltip'>Tech</div></a>
        <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav==='#projects' ? 'active' : ''}><RiServiceLine/><div className='tooltip'>Projects</div></a>
        <a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><BiMessageSquareDetail/><div className='tooltip'>Contact</div></a>
     </nav>
     </>
  )
}

export default Navi