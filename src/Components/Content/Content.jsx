import React, {useContext} from 'react'
import './Content.css'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import { Context } from '../../context/contentContext'

const Content = () => {

  const {show1, show2, show3, show4} = useContext(Context)

  return (
    <div className='content-body'>
      {show1?<Home/>:null}
      {show2?<About/>:null}
      {show3?<Skills/>:null}
      {show4?<Projects/>:null}
    </div>
  )
}

export default Content