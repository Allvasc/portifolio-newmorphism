import React from 'react'
import './BasePortifolio.css'
import InfoComponent from '../InfoPortifolio/InfoPortifolio';
import Content from '../Content/Content';

const BasePortifolio = () => {
  return (
    <div className='baseContainer'>
        <InfoComponent></InfoComponent>
        <Content></Content>
    </div>
  )
}

export default BasePortifolio