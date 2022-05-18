import React from 'react'
import './SocialMenu.css'
import { GrGithub, GrLinkedinOption, GrMail } from "react-icons/gr";
import { RiWhatsappLine } from "react-icons/ri";

const SocialMenu = () => {
    return (
        <div className='socialbuttonsCont'>
            <a className='socialButton' href="http://"><GrGithub className='iconSocial' /></a>
            <a className='socialButton' href="http://"><GrLinkedinOption className='iconSocial' /></a>
            <a className='socialButton' href="http://"><GrMail className='iconSocial' /></a>
            <a className='socialButton' href="http://"><RiWhatsappLine className='iconSocial' /></a>
        </div>
    )
}

export default SocialMenu