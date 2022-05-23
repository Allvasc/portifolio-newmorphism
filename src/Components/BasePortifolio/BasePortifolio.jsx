import React from 'react'
import './BasePortifolio.css'
import InfoComponent from '../InfoPortifolio/InfoPortifolio';
import Home from '../Home/Home';

const BasePortifolio = () => {
  return (
    <div className='baseContainer'>
        <InfoComponent></InfoComponent>
        <Home></Home>
    </div>
  )
}

export default BasePortifolio