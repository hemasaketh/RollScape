import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
    return (
        <ScoreContainer>
            
            <h1>{ score}</h1>
            <p>Total Score</p>
            
        </ScoreContainer>
    )
}

export default TotalScore;



const ScoreContainer = styled.div`
text-align: center;
/* background-color: skyblue; */

h1{
    font-size: 100px;
    line-height: 100px;
    font-weight: 500;

}
p{
    font-size: 24px;
    font-weight: 500;
}


@media (max-width: 576px) {
    /* background-color: red; */

   h1{
    /* background-color: rebeccapurple; */
    font-size: 35px;
    
   }
   p{
    /* background-color: red; */
    font-size: 18px;
    width: 400px;
    margin-bottom: 20px;
   }
}

@media (min-width:576px) and (max-width:769px)
{
   width: 100%;
   margin-bottom:20px;
}



`;
