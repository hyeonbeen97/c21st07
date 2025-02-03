import React, { useEffect, useState } from "react";


function Canvas({ scaleFactor, offsetX, offsetY, equationData }) {
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const pen = canvas.getContext("2d");
        const centerX = 250 + offsetX;
        const centerY = 250 + offsetY;

        console.log(equationData)
        pen.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i <= 1000; i += scaleFactor) {
            for (let j = 0; j < 1000; j++) {
                pen.fillStyle = "gray";
                pen.fillRect(centerX + i, j, 0.5, 0.5);
                pen.fillRect(centerX - i, j, 0.5, 0.5);
                pen.fillRect(j, centerY + i, 0.5, 0.5);
                pen.fillRect(j, centerY - i, 0.5, 0.5);
            }
        }

        for (let s = 0; s <= 1000; s += scaleFactor) {
            pen.fillStyle = "white";
            pen.fillRect(centerX + s, centerY - 5, 1, 10);
            pen.fillRect(centerX - s, centerY - 5, 1, 10);
            pen.fillRect(centerX - 5, centerY + s, 10, 1);
            pen.fillRect(centerX - 5, centerY - s, 10, 1);
        }

        for (let i = 0; i < 1000; i++) {
            pen.fillStyle = "white";
            pen.fillRect(i, centerY, 1, 1);
            pen.fillRect(centerX, i, 1, 1);
        }
        if (equationData) {
            pen.strokeStyle = "red";
            pen.beginPath();
            for (let x = -250; x <= 250; x++) {
                const graphX = centerX + x;
                let graphY = centerY - equationData(x);
                if (x === -250) {
                    pen.moveTo(graphX, graphY);
                } else {
                    pen.lineTo(graphX, graphY);
                }
            }
            pen.stroke();
        }


    }, [scaleFactor, offsetX, offsetY, equationData]);

    return <canvas id="canvas" className="canvas" width="500" height="500"></canvas>;
}

function CanvasBtn({ canvasIncrease, canvasDecrease, canvasReset, canvasMove }) {
    return (
        <div id="cvsBtn" className="cvsBtn">
            <div className="graphHistory"></div>
            <div id="controller" className="controller">
                <div id="scalecontroller" className="scaleController">
                    <button className="scaleBtn" onClick={canvasIncrease}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    <button className="scaleBtn" onClick={canvasDecrease}>
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <button className="scaleBtn" onClick={canvasReset}>
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </button>
                </div>
                <article className="fLine">
                    <button className="ctrBtn" id="arrowKeysU" onClick={() => canvasMove("up")}>
                        <i className="fa-solid fa-arrow-up"></i>
                    </button>
                </article>
                <article className="sLine">

                    <button className="ctrBtn" id="arrowKeysL" onClick={() => canvasMove("left")}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="ctrBtn" id="arrowKeysD" onClick={canvasReset}>
                        <i className="fa-solid fa-circle"></i>
                    </button>
                    <button className="ctrBtn" id="arrowKeysR" onClick={() => canvasMove("right")}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </article>
                <article className="fLine">
                    <button className="ctrBtn" id="arrowKeysD" onClick={() => canvasMove("down")}>
                        <i className="fa-solid fa-arrow-down"></i>
                    </button>

                </article>
            </div>
        </div>
    );
}



function Graph({ activeEquations, setEquationData }) {
    const drawEquation = (a, b) => {
        setEquationData((x) => a * x + b);
    };
    return (
        <div className="graph">
            {activeEquations.includes("eq1") && (
                <div className="equationbox1 visible">
                    <h2>1차 방정식</h2>
                    <p className="equation">f(𝓧) = a𝓧 + b</p>
                    <div className="equationInbox">
                        a : <input type="number" className="equationInputA" id="equationInput1"></input>
                        b : <input type="number" className="equationInputB" id="equationInput2"></input>
                    </div>
                    <button id="draw1" className="draw" onClick={() => {
                        const a = parseFloat(document.getElementById("equationInput1").value) || 0;
                        const b = parseFloat(document.getElementById("equationInput2").value) || 0;

                        drawEquation(a, b);
                    }}><i className="fa-solid fa-check"></i></button>
                    <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                </div>
            )}

            {activeEquations.includes("eq2") && (
                <div className="equationbox2 visible">
                    <h2>2차 방정식</h2>
                    <p className="equation">f(𝓧) = ax² + bx + c</p>
                    <div className="equationInbox">
                        a : <input type="number" id="equationInput3"></input>
                        b : <input type="number" id="equationInput4"></input>
                        c : <input type="number" id="equationInput5"></input>
                    </div>
                    <button id="draw2" className="draw" onClick={() => { }}><i className="fa-solid fa-check"></i></button>
                    <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                </div>
            )
            }

            {/* 3차 방정식 */}
            {
                activeEquations.includes("eq3") && (
                    <div className="equationbox3 visible">
                        <h2>3차 방정식</h2>
                        <p className="equation">f(𝓧) = ax³ + bx² + cx + d</p>
                        <div className="equationInbox">
                            a : <input type="number" id="equationInput6"></input>
                            b : <input type="number" id="equationInput7"></input>
                            <br></br>
                            c : <input type="number" id="equationInput8"></input>
                            d : <input type="number" id="equationInput9"></input>
                        </div>
                        <button id="draw3" className="draw" onClick={() => { }}><i className="fa-solid fa-check"></i></button>
                        <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                    </div >
                )
            }

            {/* 4차 방정식 */}
            {
                activeEquations.includes("eq4") && (
                    <div className="equationbox4 visible">
                        <h2>4차 방정식</h2>
                        <p className="equation">f(𝓧) = ax⁴ + bx³ + cx² + dx + e</p>
                        <div className="equationInbox">
                            a : <input type="number" id="equationInput10"></input>
                            b : <input type="number" id="equationInput11"></input>
                            c : <input type="number" id="equationInput12"></input>
                            <br></br>
                            d : <input type="number" id="equationInput13"></input>
                            e : <input type="number" id="equationInput14"></input>
                        </div>
                        <button id="draw4" className="draw" onClick={() => { }}><i className="fa-solid fa-check"></i></button>
                        <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                    </div >
                )
            }

            {/* 원 입력 */}
            {
                activeEquations.includes("circle") && (
                    <div className="equationbox7 visible">
                        <h2>원 그리기</h2>
                        <p>반지름을 입력하세요</p>
                        <div className="equationInbox">
                            a : <input type="number" id="equationInput5"></input>

                            b : <input type="number" id="equationInput5"></input>

                            반지름 : <input type="number" id="equationInput5"></input>

                        </div>
                        <button id="draw7" className="draw"><i className="fa-solid fa-check"></i></button>
                        <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
                    </div>
                )
            }
        </div >
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

function MainCanvas() {
    const [scaleFactor, setScaleFactor] = useState(10);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [equationData, setEquationData] = useState(null);

    const canvasIncrease = () => {
        setScaleFactor((prev) => Math.min(prev + 10, 100));
    };

    const canvasDecrease = () => {
        setScaleFactor((prev) => Math.max(prev - 10, 10));
    };

    const canvasReset = () => {
        setScaleFactor(10);
        setOffsetX(0);
        setOffsetY(0);
    };

    const canvasMove = (direction) => {
        const moveAmount = scaleFactor;
        if (direction === "left") setOffsetX((prev) => prev + moveAmount);
        if (direction === "right") setOffsetX((prev) => prev - moveAmount);
        if (direction === "up") setOffsetY((prev) => prev + moveAmount);
        if (direction === "down") setOffsetY((prev) => prev - moveAmount);
    };

    return (
        <div>
            <Canvas
                scaleFactor={scaleFactor}
                offsetX={offsetX}
                offsetY={offsetY}
                equationData={equationData}
            />
            <CanvasBtn
                canvasIncrease={canvasIncrease}
                canvasDecrease={canvasDecrease}
                canvasReset={canvasReset}
                canvasMove={canvasMove}
            />
        </div>
    );
}
//--------------------grahp--------------
function GraphContainer() {
    const [equationData, setEquationData] = useState(null);

    const [activeEquations, setActiveEquations] = useState([]); // 여러 개의 방정식 관리

    const toggleEquation = (id) => {
        setActiveEquations((prev) =>
            prev.includes(id) ? prev.filter((eq) => eq !== id) : [...prev, id]
        );
    };

    return (
        <div className="graph1">
            <Graph activeEquations={activeEquations} setEquationData={setEquationData} />
            <GraphBtn toggleEquation={toggleEquation} />
        </div>
    );
}


export { GraphContainer, MainCanvas };
