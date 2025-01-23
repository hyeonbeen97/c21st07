import React, { useEffect, useRef } from "react";

function Calculator() {
    const calculatorRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target.classList.contains("calculBtn")) {
                const inV = e.target.value;
                console.log(inV);

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

    return (
        <div id="calculator" className="calculator" ref={calculatorRef}>
            <section id="numView" className="numView">
                <p>0</p>
            </section>
            <section id="numBtn6" className="numBtn">
                <button className="calculBtn" value="C"><i>C</i></button>
                <button className="calculBtn" value="("><i>(</i></button>
                <button className="calculBtn" value=")"><i>)</i></button>
                <button className="calculBtn" value="&#9003;"><i>⌫</i></button>
            </section>
            <section id="numBtn5" className="numBtn">
                <button className="calculBtn" value="log"><i>log</i></button>
                <button className="calculBtn" value="tan"><i>tan</i></button>
                <button className="calculBtn" value="sin"><i>sin</i></button>
                <button className="calculBtn" value="π"><i>π</i></button>
            </section>
            <section id="numBtn4" className="numBtn">
                <button className="calculBtn" value="7">7</button>
                <button className="calculBtn" value="8">8</button>
                <button className="calculBtn" value="9">9</button>
                <button className="calculBtn" value="%"><i>%</i></button>
            </section>
            <section id="numBtn3" className="numBtn">
                <button className="calculBtn" value="4">4</button>
                <button className="calculBtn" value="5">5</button>
                <button className="calculBtn" value="6">6</button>
                <button className="calculBtn" value="*"><i>×</i></button>
            </section>
            <section id="numBtn2" className="numBtn">
                <button className="calculBtn" value="1">1</button>
                <button className="calculBtn" value="2">2</button>
                <button className="calculBtn" value="3">3</button>
                <button className="calculBtn" value="-"><i>−</i></button>
            </section>
            <section id="numBtn1" className="numBtn">
                <button className="calculBtn" value="."><i>.</i></button>
                <button className="calculBtn" value="0">0</button>
                <button className="calculBtn" value="="><i>=</i></button>
                <button className="calculBtn" value="+"><i>+</i></button>
            </section>
        </div>
    );
}

export { Calculator };
