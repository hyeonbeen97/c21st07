import React from "react";
import './App.css';
import { Canvas, CanvasBtn } from './jsx/canvas';
import { Graph, GraphBtn } from './jsx/graph';
import { Calculator } from './jsx/calculator';



function App() {
  return (
    <div className="App">
      <div id="container" className="container">
        <div id="canvasArea" className="canvasArea">
          <section className="csvsect">
            <Canvas ></Canvas>
            <CanvasBtn></CanvasBtn>
          </section>
          <section className="graphsect">
            <Graph></Graph>
            <GraphBtn></GraphBtn>
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