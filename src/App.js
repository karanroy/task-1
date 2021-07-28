import React, {useState} from 'react';
import Menubar from "./components/manubar/Menubar";
import Tabledata from "./components/tableData/Tabledata";
import "./App.css";




function App() {

  const [selectedName, setSelectedName] = useState("");
  const [selectedBox, setSelectedBox] = useState("");
  return (
    <div>
      <Menubar setSelectedName={setSelectedName} setSelectedBox={setSelectedBox}/>
      <Tabledata selectedName={selectedName} selectedBox = {selectedBox}/>
    </div>
  );
}

export default App;
