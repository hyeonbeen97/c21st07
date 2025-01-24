import React, { useEffect, useRef } from "react";

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
            <button id="draw"><i className="fa-solid fa-check"></i></button>
            <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div id="equationbox1" className="equationbox">
            <h2>1차 방정식</h2>
            <p id="equation" className="equation">
                f(𝓧) = a𝓧 + b
            </p>
            <div className="equationInbox">
                a : <input type="number" className="equationInputA"></input>
                b : <input type="number" className="equationInputB"></input>
            </div>
            <button id="draw"><i className="fa-solid fa-check"></i></button>
            <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div id="equationbox1" className="equationbox">
            <h2>1차 방정식</h2>
            <p id="equation" className="equation">
                f(𝓧) = a𝓧 + b
            </p>
            <div className="equationInbox">
                a : <input type="number" className="equationInputA"></input>
                b : <input type="number" className="equationInputB"></input>
            </div>
            <button id="draw"><i className="fa-solid fa-check"></i></button>
            <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div id="equationbox1" className="equationbox">
            <h2>1차 방정식</h2>
            <p id="equation" className="equation">
                f(𝓧) = a𝓧 + b
            </p>
            <div className="equationInbox">
                a : <input type="number" className="equationInputA"></input>
                b : <input type="number" className="equationInputB"></input>
            </div>
            <button id="draw"><i className="fa-solid fa-check"></i></button>
            <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div id="equationbox1" className="equationbox">
            <h2>1차 방정식</h2>
            <p id="equation" className="equation">
                f(𝓧) = a𝓧 + b
            </p>
            <div className="equationInbox">
                a : <input type="number" className="equationInputA"></input>
                b : <input type="number" className="equationInputB"></input>
            </div>
            <button id="draw"><i className="fa-solid fa-check"></i></button>
            <button id="drawDelet"><i className="fa-solid fa-xmark"></i></button>
        </div>


    </div >
}
function GraphBtn() {
    const calculatorRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target.id === "linearEquation") {
                console.log(e.target.id);
            }
        };
        const calculatorElement = calculatorRef.current;
        if (calculatorElement) {
            calculatorElement.addEventListener("click", handleClick);
        }


        return () => {
            if (calculatorElement) {
                calculatorElement.removeEventListener("click", handleClick);
            }
        };
    }, []);

    return <div id="graphBtn" className="graphBtn">
        <button id="linearEquation" value="sd">1차 방정식</button>
        <button id="linearEquation1">2차 방정식</button>
        <button id="linearEquation2">3차 방정식</button>
        <button id="linearEquation3">4차 방정식</button>
        <button id="linearEquation4">직선 그리기</button>
        <button id="linearEquation5">삼각형 그리기</button>
        <button id="linearEquation6">사각형 그리기</button>
        <button id="linearEquation7">원 그리기</button>
        <button><i className="fa-solid fa-eraser"></i></button>

    </div>

}
export { Graph, GraphBtn };