import styled from "styled-components";

export const Button = styled.button`

width: 220px;
height: 44px;
background: #000000;
color: white;
padding: 10px 18px;
border-radius: 5px;
font-size: 16px;
border: 1px solid transparent;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    
}`;

export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
&:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
    
}`;
