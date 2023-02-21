import React, { useState } from 'react'
import Roulette from '../components/Roulette'
import Icono from '../logo.svg'

export default function RoulettePage(props) {
    const elements = props.elements
    const [index, setIndex] = useState(0);
  
    function handleIndex(i){
      setIndex(i)
    }
  
    return (
      <div className="page roulette-page">
        <Roulette
          size={window.innerWidth<600 ? "80%" : "65%"}
          elements={props.elements} 
          turns={20} time={10} 
          handleIndex={handleIndex}
          logo={Icono}
        />
        <button className="back" onClick={()=>{props.handlePage(0)}}>Back</button>
      </div>
    );
  }
