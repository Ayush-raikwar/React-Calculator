import React, { useState } from "react";

function ResultArea(props){

   

    return <div >
            <input className="result-area" type="text" value={props.userInput}/>
    </div>
}

export default ResultArea;