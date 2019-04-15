import React from "react";
import "./style.css"
function PuppyDetails(props) {
  return (
    <div>
      {props.results.map(result => (
        <div key={result} className="list-group-item">
          <img alt="Dog" className="img-fluid rounded dog" src={result} />
        </div>
      ))}
    </div>
  );
}

export default PuppyDetails;
