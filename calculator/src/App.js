
import React from "react";
import './App.css';
import { MainCanvas, GraphContainer } from './jsx/canvas';
import { } from './jsx/graph';
import { Calculator } from './jsx/calculator';



function App() {
  return (
    <div className="App">
      <div id="container" className="container">
        <div id="canvasArea" className="canvasArea">
          <section className="csvsect">
            <MainCanvas></MainCanvas>
          </section>
          <section className="graphsect">
            <GraphContainer></GraphContainer>
          </section>
        </div>
        <div id="calculatorArea" className="calculatorArea">
          <Calculator></Calculator>
        </div>
      </div>
    </div>
  );
}

export default App;
