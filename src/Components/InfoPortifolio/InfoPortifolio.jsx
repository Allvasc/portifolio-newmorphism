import React from 'react'
import './InfoPortifolio.css'
import Perfil from '../../assets/perfil.jpg'

const InfoComponent = () => {
  return (
    <div className='infoContainer'>
      <div className='perfilCont'>
        <img className="perfil" src={Perfil} alt="Imagem Allison Vasconcelos" />
      </div>
        
    </div>
  )
}

export default InfoComponent