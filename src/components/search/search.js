import React from "react";
import "./style.css"

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <br />
        <input
          placeholder="Search for a pooch"
          value={props.value}
          onChange={props.handleInputChange}
          className="form-control"
          name="search"
          type="text"
        />
        <br />
        <button onClick={props.handleSubmit} className="btn btn-info">Bark!</button>
      </div>
    </form>
  );
}

export default SearchBar;
