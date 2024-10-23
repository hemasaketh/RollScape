import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NUmberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from './Button'
import Rules from './Rules'



const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);



  const generateRandomNumber = (min,max) =>
    {
      return (Math.floor(Math.random() * (max - min) + min));
     
  }
  

  const roleDice = () =>
    {
      

    if (!selectedNumber) {
      setError('You have not Selected Number');
      return;
    }
      

    const randomNumber = generateRandomNumber(1, 7);
      setCurrentDice((prev) => randomNumber);
    console.log(currentDice);

    if (selectedNumber == randomNumber)
    {
      setScore((prev) => prev + randomNumber);
    }
    else {
      setScore((prev)=>prev-1)
    }
    setSelectedNumber(undefined);
  }

  const resetscore = () =>
  {
    setScore(0);
  }
  


  return (
      <Maincontainer>
      <div className="top_section">
      <TotalScore score={score}></TotalScore>
        <NumberSelector setError={ setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}></NumberSelector>
      </div>

      <RollDice currentDice={currentDice} roleDice={roleDice}
      ></RollDice>
      <div className='btns'>
        <OutlineButton onClick={resetscore}>Reset</OutlineButton>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>Show Rules</Button>
      </div>

      {showRules&&<Rules/>}

    </Maincontainer>


  )
}

export default Gameplay;

const Maincontainer = styled.div`
padding-top: 70px;
.top_section{
  display: flex;
  justify-content: space-around;
  align-items: end;

}

.btns{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}


@media (max-width: 576px) {

  .top_section{
     display: flex;
     flex-direction: column;
     gap: 10px;
  }

 }

 @media (min-width:576px) and (max-width:768px){
  .top_section{
     /* background-color: yellow; */
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
  }
 }

 @media (min-width:768px) and (max-width:992px)
 {
   .top_section{
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
   }
 }
  

 @media (min-width:992px) and (max-width:1024px)
 {
    .top_section{
      /* background-color: orange; */
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;

    }
 }

`;

