import React from "react";
import "./style.css"

function ControlButton(props) {
    return (
    
    <button 
    onClick = {props.onClick} 
    className={`card-btn ${props["data-value"]} animated bounceIn delay-1s`} 
    {...props} />
    
    )
}

export default ControlButton;