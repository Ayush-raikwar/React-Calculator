import React from "react";
import App from "./App";

function Operators(props){

    
  
    function handleClick(operator){

      props.getOperatorAction(operator);
    
    }

    function equate(){
        props.callEquate();
    }

    return (
        <div className="container">
            <button onClick={()=>handleClick("/")} className="container-operators">÷</button>
            <button onClick={()=>handleClick("*")} className="container-operators">x</button>
            <button onClick={()=>handleClick("+")} className="container-operators">+</button>
            <button onClick={()=>handleClick("-")} className="container-operators">-</button>
            <button onClick={()=>equate()} className="container-operators equal">=</button>
        </div>   
    );
}

export default Operators;