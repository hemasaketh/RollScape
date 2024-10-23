import styled from 'styled-components';
import StartGame from './components/StartGame';
import { useState } from 'react';
import Gameplay from './components/Gameplay';

function App() {
  
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>
  {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {
        isGameStarted ? <Gameplay></Gameplay> : <StartGame
          toggle={toggleGamePlay }></StartGame> 
      }

      
    </>
  )
}

export default App
