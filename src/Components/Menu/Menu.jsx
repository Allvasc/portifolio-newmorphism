import React from 'react'
import './Menu.css'
import { SiAboutdotme } from "react-icons/si";


const Menu = () => {
  return (
    <div className='menuCase'>
        <a className='buttomMenu' href="https://"><SiAboutdotme className='iconMenu'/></a>
        <a className='buttomMenu' href="https://"><SiAboutdotme/></a>
        <a className='buttomMenu' href="https://"><SiAboutdotme/></a>
        <a className='buttomMenu' href="https://"><SiAboutdotme/></a>
    </div>
  )
}

export default Menu