import React, { useState } from "react";

function GraphContainer() {
    const [activeEquations, setActiveEquations] = useState([]); // 여러 개의 방정식 관리

    const toggleEquation = (id) => {
        setActiveEquations((prev) =>
            prev.includes(id) ? prev.filter((eq) => eq !== id) : [...prev, id]
        );
    };

    return (
        <div className="graph1">
            <Graph activeEquations={activeEquations} />
            <GraphBtn toggleEquation={toggleEquation} />
        </div>
    );
}

function Graph({ activeEquations }) {
    return (
        <div className="graph">
            {activeEquations.includes("eq1") && (
                <div className="equationbox1 visible">
                    <h2>1차 방정식</h2>
                    <p className="equation">f(𝓧) = a𝓧 + b</p>
                    <div className="equationInbox">
                        a : <input type="number" className="equationInputA"></input>
                        b : <input type="number" className="equationInputB"></input>
                    </div>
                    <button id="draw"><i className="fa-solid fa-check"></i></button>
                    <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                </div>
            )}

            {activeEquations.includes("eq2") && (
                <div className="equationbox2 visible">
                    <h2>2차 방정식</h2>
                    <p className="equation">f(𝓧) = ax² + bx + c</p>
                    <div className="equationInbox">
                        a : <input type="number"></input>
                        b : <input type="number"></input>
                        c : <input type="number"></input>
                    </div>
                    <button id="draw"><i className="fa-solid fa-check"></i></button>
                    <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                </div>
            )}

            {/* 3차 방정식 */}
            {activeEquations.includes("eq3") && (
                <div className="equationbox3 visible">
                    <h2>3차 방정식</h2>
                    <p className="equation">f(𝓧) = ax³ + bx² + cx + d</p>
                    <div className="equationInbox">
                        a : <input type="number"></input>
                        b : <input type="number"></input>
                        <br></br>
                        c : <input type="number"></input>
                        d : <input type="number"></input>
                    </div>
                    <button id="draw"><i className="fa-solid fa-check"></i></button>
                    <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                </div>
            )}

            {/* 4차 방정식 */}
            {activeEquations.includes("eq4") && (
                <div className="equationbox4 visible">
                    <h2>4차 방정식</h2>
                    <p className="equation">f(𝓧) = ax⁴ + bx³ + cx² + dx + e</p>
                    <div className="equationInbox">
                        a : <input type="number"></input>
                        b : <input type="number"></input>
                        c : <input type="number"></input>
                        d : <input type="number"></input>
                        e : <input type="number"></input>
                    </div>
                    <button id="draw"><i className="fa-solid fa-check"></i></button>
                    <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                </div>
            )}

            {/* 삼각형 입력 */}
            {activeEquations.includes("triangle") && (
                <div className="equationbox5 visible">
                    <h2>삼각형 그리기</h2>
                    <p>밑변과 높이를 입력하세요</p>
                    <div className="equationInbox">
                        밑변 : <input type="number"></input>
                        높이 : <input type="number"></input>
                    </div>
                    <button id="draw"><i className="fa-solid fa-check"></i></button>
                    <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                </div>
            )}

            {/* 사각형 입력 */}
            {activeEquations.includes("square") && (
                <div className="equationbox6 visible">
                    <h2>사각형 그리기</h2>
                    <p>가로와 세로 길이를 입력하세요</p>
                    <div className="equationInbox">
                        가로 : <input type="number"></input>
                        세로 : <input type="number"></input>
                    </div>
                    <button id="draw"><i className="fa-solid fa-check"></i></button>
                    <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                </div>
            )}

            {/* 원 입력 */}
            {activeEquations.includes("circle") && (
                <div className="equationbox7 visible">
                    <h2>원 그리기</h2>
                    <p>반지름을 입력하세요</p>
                    <div className="equationInbox">
                        반지름 : <input type="number"></input>
                    </div>
                    <button id="draw"><i className="fa-solid fa-check"></i></button>
                    <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                </div>
            )}
        </div>
    );
}

function GraphBtn({ toggleEquation }) {
    return (
        <div className="graphBtn">
            <button onClick={() => toggleEquation("eq1")}>1차 방정식</button>
            <button onClick={() => toggleEquation("eq2")}>2차 방정식</button>
            <button onClick={() => toggleEquation("eq3")}>3차 방정식</button>
            <button onClick={() => toggleEquation("eq4")}>4차 방정식</button>
            <button onClick={() => toggleEquation("triangle")}>삼각형 그리기</button>
            <button onClick={() => toggleEquation("square")}>사각형 그리기</button>
            <button onClick={() => toggleEquation("circle")}>원 그리기</button>
        </div>
    );
}

export { GraphContainer };
