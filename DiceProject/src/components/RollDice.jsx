import React, { useState } from 'react'
import styled from 'styled-components'
import dice_1 from './dice_1.png';
import dice_2 from './dice_2.png';
import dice_3 from './dice_3.png';
import dice_4 from './dice_4.png';
import dice_5 from './dice_5.png';
import dice_6 from './dice_6.png';

const RollDice = ({currentDice,roleDice}) => {

  



  const diceImages = [dice_1,dice_2,dice_3,dice_4,dice_5,dice_6]
  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={diceImages[currentDice-1]} alt="no" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>

  )
}

export default RollDice

const DiceContainer = styled.div`
display:flex;
flex-direction:column;
/* justify-content: center; */
align-items: center;
margin-top:50px ;

p{
  font-size: 20px;

}

.dice{
  cursor: pointer;

}
`;