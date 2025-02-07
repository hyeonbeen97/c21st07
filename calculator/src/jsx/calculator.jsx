import React, { useState } from "react";

function Calculator() {
    const [input, setInput] = useState("");
    const [rawValue, setRawValue] = useState(null);
    const [decimalPlaces, setDecimalPlaces] = useState(null);
    const [isDegreeMode, setIsDegreeMode] = useState(true);
    const handleClick = (value) => {
        if (value === "=") {
            handleCalculate();
        } else if (value === "C") {
            setInput("");
            setRawValue(null);
        } else if (value === "⌫") {
            setInput(input.slice(0, -1));
        } else {
            if (!isNaN(value) || value === ".") {
                let lastChar = input.slice(-1);

                if (lastChar === "(" || /[a-z]$/.test(input)) {
                    setInput(input + value);
                } else {
                    setInput(formatNumber((input + value).replace(/,/g, "")));
                }
            } else {
                setInput(input + value);
            }
        }
    };

    const handleCalculate = () => {
        try {
            let expression = input
                .replace(/,/g, "")
                .replace(/sin\(/g, isDegreeMode ? "Math.sin(" : "Math.sin((Math.PI/180)*")
                .replace(/cos\(/g, isDegreeMode ? "Math.cos(" : "Math.cos((Math.PI/180)*")
                .replace(/tan\(/g, isDegreeMode ? "Math.tan(" : "Math.tan((Math.PI/180)*")
                .replace(/log\(/g, "Math.log10(")
                .replace(/(\d+)%/g, "($1/100)")
                .replace(/(\d+)root(\d+)/g, (match, num, radicand) => {
                    return num ? `${num}*Math.sqrt(${radicand})` : `Math.sqrt(${radicand})`;
                })
                .replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)")
                .replace(/\+\/-\(/g, "-$1");

            const result = eval(expression);
            setRawValue(result);
            setInput(formatNumber(result));
        } catch (error) {
            setInput("ERROR");
        }
    };

    // 쉼표 넣기  Intl.NumberFormat
    const formatNumber = (num) => {
        if (isNaN(num)) return num; // 숫자가 아니면 그대로 반환
        return new Intl.NumberFormat().format(num);
    };


    const handleDecimalChange = (e) => {
        const newDecimalPlaces = Number(e.target.value);
        setDecimalPlaces(newDecimalPlaces === null ? 0 : newDecimalPlaces);

        if (rawValue !== null) {
            setInput(newDecimalPlaces === 5 ? rawValue.toString() : rawValue.toFixed(newDecimalPlaces));
        }
    };

    const handleModeChange = (mode) => {
        setIsDegreeMode(mode === "rad");
    };

    return (
        <div id="calculator" className="calculator">
            <section id="numView" className="numView">
                <p id="initNumV">{input.replace(/\*/g, "×").replace(/\//g, "÷").replace(/root/g, "√")}</p>
            </section>
            <section className="tofixedbox">
                <input
                    className="radio-checked_input"
                    id="on"
                    name="status"
                    type="radio"
                    value="rad"
                    checked={isDegreeMode}
                    onChange={() => handleModeChange("rad")}
                />
                <label className="radio-checked_label radio-checked_label--on" htmlFor="on">Rad</label>
                <input
                    className="radio-checked_input"
                    id="off"
                    name="status"
                    type="radio"
                    value="deg"
                    checked={!isDegreeMode}
                    onChange={() => handleModeChange("deg")}
                />
                <label className="radio-checked_label radio-checked_label--off" htmlFor="off">Deg</label>

                <input
                    type="range"
                    min="0"
                    max="5"
                    value={decimalPlaces ?? 0}
                    className="tofixed"
                    id="tofixed"
                    onChange={handleDecimalChange}
                />
                <article className="fixedbox">
                    <span className="fixed">Decimal Point {decimalPlaces === 5 ? "No limit" : decimalPlaces ?? "0"}</span>
                </article>
            </section>
            <section id="numBtn6" className="numBtn">
                <button onClick={() => handleClick("C")} className="cleatBtn">C</button>
                <button onClick={() => handleClick("(")} className="calculBtn">(</button>
                <button onClick={() => handleClick(")")} className="calculBtn">)</button>
                <button onClick={() => handleClick("⌫")} className="calculBtn">⌫</button>
            </section>
            <section id="numBtn7" className="numBtn">
                <button onClick={() => handleClick("%")} className="cleatBtn"><i class="fa-solid fa-percent"></i></button>
                <button onClick={() => handleClick("root")} className="calculBtn">&radic;</button>
                <button onClick={() => handleClick("^")} className="calculBtn">&#94;</button>
                <button onClick={() => handleClick("")} className="calculBtn">+/-</button>
            </section>
            <section id="numBtn5" className="numBtn">
                <button onClick={() => handleClick("cos(")} className="cleatBtn">cos</button>
                <button onClick={() => handleClick("sin(")} className="calculBtn">sin</button>
                <button onClick={() => handleClick("tan(")} className="calculBtn">tan</button>
                <button onClick={() => handleClick("log(")} className="calculBtn">log</button>
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
                <button onClick={() => handleClick("*")} className="calculBtn"><i className="fa-solid fa-xmark"></i></button>
            </section>
            <section id="numBtn2" className="numBtn">
                <button onClick={() => handleClick("1")} className="calculBtn">1</button>
                <button onClick={() => handleClick("2")} className="calculBtn">2</button>
                <button onClick={() => handleClick("3")} className="calculBtn">3</button>
                <button onClick={() => handleClick("-")} className="calculBtn"><i className="fa-solid fa-minus"></i></button>
            </section>
            <section id="numBtn1" className="numBtn">
                <button onClick={() => handleClick("=")} className="calculBtn"><i className="fa-solid fa-equals"></i></button>
                <button onClick={() => handleClick("0")} className="calculBtn">0</button>
                <button onClick={() => handleClick(".")} className="calculBtn">.</button>
                <button onClick={() => handleClick("+")} className="calculBtn"><i className="fa-solid fa-plus"></i></button>
            </section>
        </div>
    );
}

export { Calculator };
