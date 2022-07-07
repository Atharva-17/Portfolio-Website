import React from 'react'
import './social.css'
import {AiFillInstagram} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';

function Social() {
  return (
    <>
    <div className='main__social'>
        <div className='social__items'>
        <a href="#" className='social__icon'><AiFillInstagram/></a>
        <a href="#" className='social__icon' ><BsLinkedin/></a>
        <a href="#" className='social__icon'><AiFillGithub/></a>
        <a href="#" className='social__icon'><BsTwitter/></a>
        </div>

    </div>
    </>
  )
}

export default Social

