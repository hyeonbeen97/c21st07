function Graph() {
    return <div className="graph">
        <div id="equationbox1" className="equationbox">
            <h2>1차 방정식</h2>
            <p id="equation" className="equation">
                f(𝓧) = a𝓧 + b
            </p>
            <div className="equationInbox">
                a : <input type="number" className="equationInputA"></input>
                b : <input type="number" className="equationInputB"></input>
            </div>
            <button id="draw"><i className="xi-check"></i></button>
            <button id="drawDelet"><i className="xi-close"></i></button>
        </div>


    </div >
}
function GraphBtn() {
    return <div id="graphBtn" className="graphBtn">
        <button>1차 방정식</button>
        <button>2차 방정식</button>
        <button>3차 방정식</button>
        <button>4차 방정식</button>
        <button>직선 그리기</button>
        <button>삼각형 그리기</button>
        <button>사각형 그리기</button>
        <button>원 그리기</button>
        <button>원 그리기</button>

    </div>
}
export { Graph, GraphBtn };