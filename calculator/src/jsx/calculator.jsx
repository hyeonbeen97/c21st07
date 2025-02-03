import React, { useState } from "react";

function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        if (value === "=") {
            handleCalculate();
        } else if (value === "C") {
            setInput("");
        } else if (value === "⌫") {
            setInput(input.slice(0, -1));
        } else if (value === "sin") {
            setInput(Math.sin(input).toString());
        } else if (value === "tan") {
            setInput(Math.tan(input).toString());

        } else if (value === "cos") {
            setInput(Math.cos(input).toString());

        } else if (value === "root") {
            setInput(Math.sqrt(input));

        }

        else {
            setInput(input + value);
        }
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString()); // 보안 문제를 고려하여 Function 생성자로 변경 가능
        } catch (error) {
            setInput("Error");
        }
    };

    return (
        <div id="calculator" className="calculator">
            <section id="numView" className="numView">
                <p id="initNumV">{input}</p>
            </section>
            <section id="numBtn6" className="numBtn">
                <button onClick={() => handleClick("C")} className="cleatBtn">C</button>
                <button onClick={() => handleClick("(")} className="calculBtn">(</button>
                <button onClick={() => handleClick(")")} className="calculBtn">)</button>
                <button onClick={() => handleClick("⌫")} className="calculBtn">⌫</button>
            </section>
            <section id="numBtn5" className="numBtn">
                <button onClick={() => handleClick("cos")} className="cleatBtn">cos</button>
                <button onClick={() => handleClick("sin")} className="calculBtn">sin</button>
                <button onClick={() => handleClick("tan")} className="calculBtn">tan</button>
                <button onClick={() => handleClick("root")} className="calculBtn">&radic;</button>
            </section>
            <section id="numBtn4" className="numBtn">
                <button onClick={() => handleClick("7")} className="calculBtn">7</button>
                <button onClick={() => handleClick("8")} className="calculBtn">8</button>
                <button onClick={() => handleClick("9")} className="calculBtn">9</button>
                <button onClick={() => handleClick("/")} className="calculBtn">÷</button>
            </section>
            <section id="numBtn3" className="numBtn">
                <button onClick={() => handleClick("4")} className="calculBtn">4</button>
                <button onClick={() => handleClick("5")} className="calculBtn">5</button>
                <button onClick={() => handleClick("6")} className="calculBtn">6</button>
                <button onClick={() => handleClick("*")} className="calculBtn">×</button>
            </section>
            <section id="numBtn2" className="numBtn">
                <button onClick={() => handleClick("1")} className="calculBtn">1</button>
                <button onClick={() => handleClick("2")} className="calculBtn">2</button>
                <button onClick={() => handleClick("3")} className="calculBtn">3</button>
                <button onClick={() => handleClick("-")} className="calculBtn">-</button>
            </section>
            <section id="numBtn1" className="numBtn">
                <button onClick={() => handleClick(".")} className="calculBtn">.</button>
                <button onClick={() => handleClick("0")} className="calculBtn">0</button>
                <button onClick={() => handleClick("=")} className="calculBtn">=</button>
                <button onClick={() => handleClick("+")} className="calculBtn">+</button>
            </section>
        </div>
    );
}

export { Calculator };
