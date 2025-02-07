import React, { useEffect, useState } from "react";


function Canvas({ scaleFactor, offsetX, offsetY, equations }) {
    useEffect(() => {
        let cursorSmall = document.querySelector('.small');


        document.addEventListener('mousemove', function (e) {
            let x = e.clientX;
            let y = e.clientY;
            cursorSmall.style.left = x + 'px';
            cursorSmall.style.top = y + 'px';
        });

        const colors = ["yellowgreen", "yellow", "pink", "purple", "orange", "aqua", "white"]
        const canvas = document.getElementById("canvas");
        const pen = canvas.getContext("2d");
        const centerX = 250 + offsetX;
        const centerY = 250 + offsetY;
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



        equations.forEach(({ eqFunc, type }, index) => {
            pen.fillStyle = colors[index % colors.length];
            pen.beginPath();
            //  원 그리기
            if (type === "circle") {
                const { a, b, r } = eqFunc;
                const step = Math.PI / 180;

                for (let i = 0; i < 2 * Math.PI; i += step) {
                    const x = a + r * Math.cos(i);
                    const y = b + r * Math.sin(i);
                    const pixelX = centerX + x * scaleFactor;
                    const pixelY = centerY - y * scaleFactor;

                    pen.fillRect(pixelX, pixelY, 1, 1);

                }
            } else if (typeof eqFunc === "function") {
                //  방정식 r그리기
                for (let x = -canvas.width; x <= canvas.width; x += 0.1) {
                    const xValue = x / scaleFactor;
                    const graphX = centerX + x;
                    const graphY = centerY - eqFunc(xValue) * scaleFactor;
                    pen.fillRect(graphX, graphY, 1, 1);

                }
            }
        });
    }, [scaleFactor, offsetX, offsetY, equations]);

    return <canvas id="canvas" className="canvas" width="500" height="500"></canvas>;
}

function CanvasBtn({ canvasIncrease, canvasDecrease, canvasReset, canvasMove, canvasArrowReset, scaleFactor }) {
    return (
        <div id="cvsBtn" className="cvsBtn">
            <div id="scalecontroller" className="scaleController">
                <span className="Scale">Scale Controller</span>
                <span className="Scale2">{scaleFactor}</span>
                <button className="scaleBtn" onClick={canvasIncrease}>
                    <i className="fa-solid fa-plus"></i>
                </button>

                <button className="scaleBtn" onClick={canvasReset}>
                    <i className="fa-solid fa-arrows-rotate"></i>

                </button>
                <button className="scaleBtn" onClick={canvasDecrease}>
                    <i className="fa-solid fa-minus"></i>
                </button>
            </div>
            <div id="controller" className="controller">
                <span className="Arrowkeys">Move Controller</span>

                <article className="fLine">
                    <button className="ctrBtn" id="arrowKeysU" onClick={() => canvasMove("up")}>
                        <i className="fa-solid fa-arrow-up"></i>
                    </button>
                </article>
                <article className="sLine">

                    <button className="ctrBtn" id="arrowKeysL" onClick={() => canvasMove("left")}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="ctrBtn" id="arrowKeysD" onClick={canvasArrowReset}>
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



function Graph({ activeEquations, setEquations, }) {
    const drawEquation = (type) => {
        let eqFunc;
        if (type === "eq1") {
            const a = parseFloat(document.getElementById("equationInput1").value);
            const b = parseFloat(document.getElementById("equationInput2").value);
            eqFunc = (x) => a * x + b;

        } else if (type === "eq2") {
            const a = parseFloat(document.getElementById("equationInput3").value);
            const b = parseFloat(document.getElementById("equationInput4").value);
            const c = parseFloat(document.getElementById("equationInput5").value);
            eqFunc = (x) => a * x * x + b * x + c;
        } else if (type === "eq3") {
            const a = parseFloat(document.getElementById("equationInput6").value);
            const b = parseFloat(document.getElementById("equationInput7").value);
            const c = parseFloat(document.getElementById("equationInput8").value);
            const d = parseFloat(document.getElementById("equationInput9").value);
            eqFunc = (x) => a * x ** 3 + b * x ** 2 + c * x + d;

        } else if (type === "eq4") {
            const a = parseFloat(document.getElementById("equationInput10").value);
            const b = parseFloat(document.getElementById("equationInput11").value);
            const c = parseFloat(document.getElementById("equationInput12").value);
            const d = parseFloat(document.getElementById("equationInput13").value);
            const e = parseFloat(document.getElementById("equationInput14").value);
            eqFunc = (x) => a * x ** 4 + b * x ** 3 + c * x ** 2 + d * x + e

        } else if (type === "eq5") {
            const a = parseFloat(document.getElementById("equationInput15").value);
            const b = parseFloat(document.getElementById("equationInput16").value);
            const r = parseFloat(document.getElementById("equationInput17").value);
            eqFunc = { a, b, r };
            setEquations((prev) => [
                ...prev,
                { type: "circle", eqFunc: { a, b, r } }
            ]);

        }
        setEquations((prev) => [...prev, { eqFunc, type }])

    };
    return (
        <div className="graph">
            {activeEquations.includes("eq1") && (
                <div className="equationbox1 visible">
                    <h2>Linear equation</h2>
                    <p className="equation">f(𝓧) = 𝒂𝓧 + 𝒃</p>
                    <div className="equationInbox">
                        𝒂 : <input type="number" className="equationInputA" id="equationInput1"></input>
                        𝒃 : <input type="number" className="equationInputB" id="equationInput2"></input>
                    </div>
                    <button id="draw1" className="draw" onClick={
                        () => drawEquation("eq1")
                    }><i className="fa-solid fa-check"></i></button>

                </div>
            )
            }

            {
                activeEquations.includes("eq2") && (
                    <div className="equationbox2 visible">
                        <h2>Quadratic equation</h2>
                        <p className="equation">f(𝓧) = 𝒂𝓧² + 𝒃𝓧 + 𝒄</p>
                        <div className="equationInbox">
                            𝒂 : <input type="number" id="equationInput3"></input>
                            𝒃 : <input type="number" id="equationInput4"></input>
                            𝒄 : <input type="number" id="equationInput5"></input>
                        </div>
                        <button id="draw2" className="draw" onClick={() => drawEquation("eq2")}><i className="fa-solid fa-check"></i></button>

                    </div >
                )
            }

            {/* 3차 방정식 */}
            {
                activeEquations.includes("eq3") && (
                    <div className="equationbox3 visible">
                        <h2>Cubic equation</h2>
                        <p className="equation">f(𝓧) = 𝒂𝓧³ + 𝒃𝓧² + 𝒄𝓧 + 𝒅</p>
                        <div className="equationInbox">
                            𝒂 : <input type="number" id="equationInput6" className="eqboxin"></input>
                            𝒃 : <input type="number" id="equationInput7" className="eqboxin"></input>
                            <br></br>
                            𝒄 : <input type="number" id="equationInput8" className="eqboxin"></input>
                            𝒅 : <input type="number" id="equationInput9" className="eqboxin"></input>
                        </div>
                        <button id="draw3" className="draw" onClick={() => { drawEquation("eq3") }}><i className="fa-solid fa-check"></i></button>

                    </div >
                )
            }

            {/* 4차 방정식 */}
            {
                activeEquations.includes("eq4") && (
                    <div className="equationbox4 visible">
                        <h2>Quartic equation</h2>
                        <p className="equation">f(𝓧) = 𝒂𝓧⁴+ 𝒃𝓧³ + 𝒄𝓧² + 𝒅𝓧 + 𝒆</p>
                        <div className="equationInbox">
                            𝒂 : <input type="number" id="equationInput10" className="eqboxin"></input>
                            𝒃 : <input type="number" id="equationInput11" className="eqboxin"></input>
                            𝒄 : <input type="number" id="equationInput12" className="eqboxin"></input>
                            <br></br>
                            𝒅 : <input type="number" id="equationInput13" className="eqboxin"></input>
                            𝒆 : <input type="number" id="equationInput14" className="eqboxin"></input>
                        </div>
                        <button id="draw4" className="draw" onClick={() => { drawEquation("eq4") }}><i className="fa-solid fa-check"></i></button>

                    </div >
                )
            }

            {/* 원 입력 */}
            {
                activeEquations.includes("circle") && (
                    <div className="equationbox7 visible">
                        <h2>Circle</h2>
                        <div className="equationInbox">
                            𝒂 : <input type="number" id="equationInput15"></input>

                            b : <input type="number" id="equationInput16"></input>

                            r : <input type="number" id="equationInput17"></input>

                        </div>
                        <button id="draw7" className="draw" onClick={() => { drawEquation("eq5") }}><i className="fa-solid fa-check"></i></button>

                    </div >
                )
            }
        </div >
    );
}

function GraphBtn({ toggleEquation, clear }) {


    return (
        <div className="graphBtn">
            <button onClick={() => toggleEquation("eq1")}>Linear</button>
            <button onClick={() => toggleEquation("eq2")}>Quadratic</button>
            <button onClick={() => toggleEquation("eq3")}>Cubic</button>
            <button onClick={() => toggleEquation("eq4")}>Quartic</button>
            <button onClick={() => toggleEquation("circle")}>Circle</button>
            <button onClick={clear}><i className="fa-solid fa-eraser"></i></button>
        </div>
    );
}

function MainCanvas() {
    const [scaleFactor, setScaleFactor] = useState(10);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [equations, setEquations] = useState([]);

    const [activeEquations, setActiveEquations] = useState([]); // 여러 개의 방정식 관리

    const toggleEquation = (id) => {
        setActiveEquations((prev) =>
            prev.includes(id) ? prev.filter((eq) => eq !== id) : [...prev, id]
        );
    };

    const canvasIncrease = () => {
        setScaleFactor((prev) => Math.min(prev + 10, 100));
    };

    const canvasDecrease = () => {
        setScaleFactor((prev) => Math.max(prev - 10, 10));
    };

    const canvasReset = () => {
        setScaleFactor(10);

    };
    const canvasArrowReset = () => {
        setOffsetX(0);
        setOffsetY(0);
    };
    const clear = () => {
        setEquations([]);
    };

    const canvasMove = (direction) => {
        const moveAmount = scaleFactor;
        if (direction === "left") setOffsetX((prev) => prev + moveAmount);
        if (direction === "right") setOffsetX((prev) => prev - moveAmount);
        if (direction === "up") setOffsetY((prev) => prev + moveAmount);
        if (direction === "down") setOffsetY((prev) => prev - moveAmount);
    };

    return (
        <div id="canvasArea" className="canvasArea">
            <section className="csvsect">
                <Canvas
                    scaleFactor={scaleFactor} offsetX={offsetX} offsetY={offsetY} equations={equations}
                />
                <CanvasBtn
                    canvasIncrease={canvasIncrease}
                    canvasDecrease={canvasDecrease}
                    canvasReset={canvasReset}
                    canvasMove={canvasMove}
                    canvasArrowReset={canvasArrowReset}
                    scaleFactor={scaleFactor}
                />
            </section>
            <section className="graphsect">
                <div className="graph1">
                    <Graph activeEquations={activeEquations} setEquations={setEquations} />
                    <GraphBtn toggleEquation={toggleEquation} clear={clear} />
                </div>
            </section>
        </div>
    );
}


export { MainCanvas };
