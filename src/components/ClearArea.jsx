import React from "react";

function ClearArea(props){

    let handleClearState = () => {
        props.clear();

    }

    return(
        <button onClick={handleClearState.bind(this)} className="clear-area">Clear</button>
    ); 
}

export default ClearArea;