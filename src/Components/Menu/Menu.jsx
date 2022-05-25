import React, {useContext} from 'react'
import './Menu.css'
import { AiFillHome, AiOutlineUser, AiOutlineAudit, AiOutlineCode } from "react-icons/ai";
import { Context } from '../../context/contentContext'

const Menu = () => {

  const {showHide1, showHide2, showHide3, showHide4} = useContext(Context)

  return (
    <div className='menuCase'>
        <button className='buttomMenu' onClick={showHide1}><AiFillHome className='iconMenu'/></button>
        <button className='buttomMenu' onClick={showHide2}><AiOutlineUser/></button>
        <button className='buttomMenu' onClick={showHide3}><AiOutlineAudit/></button>
        <button className='buttomMenu' onClick={showHide4}><AiOutlineCode/></button>
    </div>
  )
}

export default Menu