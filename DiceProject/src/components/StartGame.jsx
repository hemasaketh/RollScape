import React from 'react'
import styled from 'styled-components'
import dicepic from './dicepic.png'
import { Button } from './Button'

const StartGame = ({toggle}) => {
  return (
      <Container>
          <div>
          <img src={dicepic} alt="" />
         </div>
          <div className='content'>
              <h1>Roll N Scroll </h1>
              <div className='btn'>
              <Button onClick={toggle}>Play Now</Button>
              </div>
          </div>
   </Container>
  )
}

export default StartGame


const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;

.content h1{
    font-size: 80px;
    white-space: nowrap;

}

.btn{
    display: flex;
    justify-content: end;
}


@media (max-width:576px) {
    display: flex;
    flex-direction: column;

    img{
        width: 100%;
        margin-top: 90px;
        margin-bottom: 90px;
    }
    .content h1{
        font-size: 20px;
        margin-bottom: 30px;
    }
}

@media (min-width:576px) and (max-width:768px){

    display: flex;
    flex-direction: column;
    gap: 20px;
    .btn{
        margin-top: 20px;
        /* background-color: yellow; */
        display: flex;
        justify-content: flex-start;
    }

}


@media (min-width:768px) and (max-width:992px)
{
    display: flex;
    flex-direction: column;
    gap: 30px;
    .content{
        /* background-color: yellow; */
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
}

@media (min-width:992px) and (max-width:1024px){
    display: flex;
    flex-direction: column;
    gap: 50px;
    .content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
}

`;





