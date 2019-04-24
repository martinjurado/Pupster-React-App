import React from "react";
import ControlButton from "../controls/controls";
import "./style.css";

function RandomPup(props) {
  return (
    <div>
      <img
        alt="random"
        className="random-dog img-thumbnail img-fluid animated bounceIn delay-1s"
        src={props.image}
      />
      <ControlButton
        onClick={props.handleSubmit}
        data-value="pass"
        style={{ opacity: props.image ? 1 : 0 }}
        
      />
      <ControlButton
        onClick={props.handleSubmit}
        data-value="pick"
        style={{ opacity: props.image ? 1 : 0 }}
      />
    </div>
  );
}

export default RandomPup;
