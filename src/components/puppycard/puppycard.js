import React from "react";

function PuppyDetails(props) {
  return (
    <div>
      <img className="rounded img-thumbnail" src={props.message} />
    </div>
  );
}

export default PuppyDetails;
