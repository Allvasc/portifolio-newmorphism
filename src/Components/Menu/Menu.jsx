import React from 'react'
import './Menu.css'
import { AiFillHome, AiOutlineUser, AiOutlineAudit, AiOutlineCode } from "react-icons/ai";

const Menu = () => {
  return (
    <div className='menuCase'>
        <a className='buttomMenu' href="https://"><AiFillHome className='iconMenu'/></a>
        <a className='buttomMenu' href="https://"><AiOutlineUser/></a>
        <a className='buttomMenu' href="https://"><AiOutlineAudit/></a>
        <a className='buttomMenu' href="https://"><AiOutlineCode/></a>
    </div>
  )
}

export default Menu