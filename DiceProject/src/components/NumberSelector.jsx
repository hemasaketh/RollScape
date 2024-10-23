import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {

  const arr = [1, 2, 3, 4, 5, 6];
  


  console.log(selectedNumber)
  const numberSelectorHandler = (Element) =>
  {
    setSelectedNumber(Element);
    setError("")
  }

  return (
    <>
      <NumberSelectorContainer>
        <p className='error'>{error}</p>
      <div className='flex'>
        {
          arr.map((Element, index) =>
          {
            return (
                <Box
              isselected={Element === selectedNumber}
              key={index}
              onClick={()=>numberSelectorHandler(Element)}>
              {Element}
            </Box>
                
              
            )
          })
        }
        
        </div>
        <p>Select Number</p>
      
      </NumberSelectorContainer>

    </>
  )
}

export default NumberSelector



const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
background-color: ${(props) => (props.isselected ? "black" : "white")};
color: ${(props) => (props.isselected ? "white" : "black")};

@media (max-width:576px) {
  /* background-color: red; */
  height: 40px;
width: 40px;
font-size:20px ;
&:last-child {
      /* Styles for the last iterative box */
      margin-right: 6px;
    }

}
`;



const NumberSelectorContainer = styled.div`
/* width: 100%; */
/* background-color: pink; */


.flex{
  
  display: flex;
  gap: 24px;
  
}
p{
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: end;
}

.error{
  color: red;
}

@media (max-width: 576px) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;


  .error{
    /* background-color: pink; */
    font-size: 15px;
    

  }

  p{
    /* background-color: yellow; */
    text-align: left;
  }

}

@media (min-width: 576px) and (max-width:769px)
{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
}

@media (min-width:768px) and (max-width:992px){
    
     display: flex;
     flex-direction: column;
     width: 100%;
     align-items: center;
     gap: 30px;
}

@media (min-width:992px) and (max-width:1024px)
{
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

`  ;