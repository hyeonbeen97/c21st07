import './App.css';

function Canvas() {
  return <canvas id='canvas' className='canvas' width="500" height="500"></canvas>
}
function Histroy() {
  return <div className="histroy">
    <p>sasadasdsd</p>
    <p>sasadasdsd</p>
    <p>sasadasdsd</p>
    <p>sasadasdsd</p>
    <p>sasadasdsd</p>
  </div>
}
function CanvasBtn() {
  return <div id="cvsBtn" className="cvsBtn">
    <button>1차 방정식</button>
    <button>1차 방정식</button>
    <button>1차 방정식</button>
    <button>1차 방정식</button>
    <button>1차 방정식</button>
    <button>1차 방정식</button>
    <button>1차 방정식</button>
    <button>1차 방정식</button>
    <button>1차 방정식</button>
    <button>1차 방정식</button>
  </div>
}
function App() {
  return (
    <div className="App">
      <div id="container" className="container">
        <div id="canvasArea" className="canvasArea">
          <section className="csvhist">
            <Canvas></Canvas>
            <Histroy></Histroy>
          </section>

          <CanvasBtn></CanvasBtn>
        </div>
        <div id="calculatorArea" className="calculatorArea">
          <Canvas></Canvas>

        </div>
      </div>
    </div>
  );
}

export default App;
