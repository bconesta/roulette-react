import React, { useEffect, useState } from 'react'

export default function Home(props) {
    const[quant, setQuant] = useState(2);
    const[array, setArray] = useState([]);
    const[error, setError] = useState("");
    useEffect(()=>{
        setArray([...Array(quant).keys()]);
    },[quant])

    function handleNext(){
        const inputs = document.getElementById("form").elements;
        const data = [];
        let err = false;
        for(let i=0;i<quant;i++){
            data.push(inputs[i].value)
        }
        data.forEach((element)=>{
            if(element === ""){
                setError("There are empty spaces")
                err = true
            }
            else if(data.indexOf(element) !== data.lastIndexOf(element)){
                setError("There are two or more equal texts")
                err = true
            }
        })
        props.handleElements(data)
        if(!err){
            props.handlePage(1)
        }
        
    }

    return (
        <div className='home page'>
            <div className="tittle">
                <h1>Roulette</h1>
            </div>
            <div className="form">
                <form id="form" onChange={()=>{setError("")}}>
                    <ul>
                        {
                        array.map((i)=>{
                            return(<li key={i}><input type="text" maxLength="10" defaultValue="" /></li>)
                        })
                        }
                    </ul>
                </form>
                {quant > 2 && <button onClick={()=>{setQuant(quant-1)}}>-</button>}
                {quant < 10 && <button onClick={()=>{setQuant(quant+1)}}>+</button>}
                <button className='next' onClick={handleNext}>Next</button>
                <h3>{error}</h3>
            </div>
        </div>
    )
}
