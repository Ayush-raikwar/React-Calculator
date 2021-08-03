
import React, { useState } from "react";
import ResultArea from "./ResultArea";
import ClearArea from "./ClearArea";
import Operators from "./Operators";
import Numbers from "./Numbers";

function App(){

    const [user_input,setstate] = useState("");

    let getUserInput = (valNum) => {
        setstate(user_input+""+valNum);
        
    }

    function getOperator(operatorVal){
        
       
     
        if(user_input.charAt(user_input.length-1)===operatorVal){
            console.log(user_input);
        } else{
            setstate(user_input+operatorVal);

        }
     

    }

    function clearAll(){
        setstate("");
    }
    
    function compute(){
        
        var lastChar = user_input.charAt(user_input.length-1);
        if(lastChar==="+" || lastChar==="-" || lastChar==="/" || lastChar==="*"){
            console.log("Enter operand");
        } else{
            if(user_input.includes("*") || user_input.includes("/") || user_input.includes("+") || user_input.includes("-")){
                console.log("* / + - included");
                console.log(eval(user_input));
                setstate(eval(user_input))
            } else{
                setstate(user_input)
                console.log("State altered");
            }
           
       
        }
         
    }

    return (
    <div className="main-div">
        <ResultArea userInput={user_input} />
        <ClearArea  clear={clearAll} />
        <Operators getOperatorAction={getOperator} callEquate={compute} />
        <Numbers  getUserInputAction={getUserInput}  />
      
    </div>);
}

export default App;