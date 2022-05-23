import React from 'react'
import './InfoPortifolio.css'
import Perfil from '../../assets/perfil.jpg'
import SocialMenu from '../SocialMenu/SocialMenu'

const InfoComponent = () => {
  return (
    <div className='infoContainer'>
      <div className='perfilCont'>
        <img className="perfil" src={Perfil} alt="Imagem Allison Vasconcelos" />
      </div>
      <p className='nome'>Allison Vasconcelos</p>
      <p className='role'>Desenvolvedor Front-end</p>
        <SocialMenu/>
    </div>
  )
}

export default InfoComponent