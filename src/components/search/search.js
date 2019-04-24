import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <br />
        <input
          placeholder="Search for a pooch"
          value={props.value}
          onChange={props.handleInputChange}
          className="form-control animated bounceIn delay-1s"
          name="search"
          list="breeds"
          type="text"
          id="breed"
        />
        <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist>
        <br />
        <button onClick={props.handleSubmit} className="btn btn-dark animated bounceIn delay-1s">
          Bark!
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
