import React from "react";
import SearchField from "react-search-field";

import "./menubar.css";

export default function Menubar({setSelectedName , setSelectedBox}) {

  function onChanged(value, event) {
    const name = event.target.value;

    setSelectedName(name);
  }
  function boxHandler(e){
    let boxValue = e.target.checked;
    console.log(boxValue);
    setSelectedBox(boxValue)  
  }

  return (
    <>
      <div className="container-1">
        <div className="search-bar">
          <SearchField
            placeholder="Search"
            onChange={onChanged}
            classNames="test-class"
          />
        </div>
        <div className="selected-box">
          <input type="checkbox" id="selected-item" value="checked" onChange={ (e) => boxHandler(e)} />
          <label for="selected-item"> Show Selected</label>
        </div>
      </div>
    </>
  );
}
