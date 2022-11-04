// import React from 'react'
import styled from 'styled-components'

const Button =styled.button`
     color: ${(props)=>(props.changeColor ?"purple":"black")};
    border-radius: 20px;
    cursor: ${(props)=>(props.usePointer?"pointer":"grab")};
    box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
    transition: 0.5s;
    padding: 15px 50px;
    background: white;
    font-size:3rem;
    border: ${(props)=>props.changeBorder?"5px solid orange": "5px solid black" };

    @media (max-width: 800px) {
    padding: 8px 25px;

    font-size:1.5rem;
      }

   
   &:hover {

    background:blue;
     color:white;
  }
`



export default Button