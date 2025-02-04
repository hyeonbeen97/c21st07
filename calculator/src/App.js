
import React from "react";
import './App.css';
import { MainCanvas } from './jsx/canvas';
import { Calculator } from './jsx/calculator';


function App() {
  return (
    <div className="App">
      <div id="container" className="container">
        <MainCanvas></MainCanvas>
        <div id="calculatorArea" className="calculatorArea">
          <Calculator></Calculator>
        </div>
      </div>
    </div >
  );
}

export default App;
