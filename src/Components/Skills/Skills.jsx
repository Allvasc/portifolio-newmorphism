import React from 'react'
import './Skills.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.svg'
import mysql from '../../assets/mysql-icon.svg'
import react from '../../assets/react.svg'
import nextjs from '../../assets/nextjs-icon.svg'
import Tailwind from '../../assets/Tailwind.png'
import git from '../../assets/git.svg'


const Skills = () => {
  return (
    <div>
      <h1 className='title-skill'>Skills</h1>
      <div className='img-cont'>
        <img className='img-item' src={html} alt="logo html" />
        <img className='img-item' src={css} alt="logo css" />
        <img className='img-item' src={javascript} alt="logo javascript" />
        <img className='img-item' src={react} alt="logo react" />
        <img className='img-item' src={nextjs} alt="logo nextjs" />
        <img className='img-item' src={Tailwind} alt="logo Tailwind" />
        <img className='img-item' src={git} alt="logo git" />
        <img className='img-item' src={mysql} alt="logo mysql" />
      </div>

    </div>
  )
}

export default Skills