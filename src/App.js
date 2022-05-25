import Background from './assets/BG.png'
import { useState } from 'react';
import './App.css';
import BasePortifolio from './Components/BasePortifolio/BasePortifolio';
import Menu from './Components/Menu/Menu';
import { CtxProvider } from './context/contentContext';

function App() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  function quandoMover(ev) {
    setX(ev.pageX * -1 / 15)
    setY(ev.pageY * -1 / 15)
  }

  const estilo = {
    backgroundImage: `url(${Background})`,
    backgroundPositionX: `${x}px`,
    backgroundPositionY: `${y}px`,
    backgroundSize: '110vw',
    minHeight: '100vh',
    overFlow: 'hidden',
    backgroundRepeat: 'repeat',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <CtxProvider>
      <div style={estilo} className="App" onMouseMove={quandoMover}>
        <BasePortifolio />
        <Menu />
      </div>
    </CtxProvider>
  );
}

export default App;
