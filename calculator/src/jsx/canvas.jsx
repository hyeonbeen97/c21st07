import React, { useEffect } from "react";

function Canvas() {
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const pen = canvas.getContext("2d");
        const scaleF = 30
        const offset = 250;
        for (let i = 0; i <= 500; i += scaleF) {
            for (let j = 0; j < 500; j++) {
                pen.fillStyle = "gray";
                pen.fillRect(offset + i, j, 0.5, 0.5);
                pen.fillRect(offset - i, j, 0.5, 0.5);
                pen.fillRect(j, offset + i, 0.5, 0.5);
                pen.fillRect(j, offset - i, 0.5, 0.5);
            }
        }
        // 눈금 표시
        for (let s = 0; s <= 500; s += scaleF) {
            pen.fillStyle = "white";
            pen.fillRect(offset + s, offset - 5, 1, 10);
            pen.fillRect(offset - s, offset - 5, 1, 10);
            pen.fillRect(offset - 5, offset + s, 10, 1);
            pen.fillRect(offset - 5, offset - s, 10, 1);
        }


        for (let i = 0; i < 500; i++) {
            pen.fillStyle = "white";
            pen.fillRect(i, offset, 1, 1);
            pen.fillRect(offset, i, 1, 1);
        }




    });
    return <canvas id="canvas" className="canvas" width="500" height="500"></canvas>;
}

function CanvasBtn() {
    return <div id="cvsBtn" className="cvsBtn">
        <div id="scalecontroller" className="scaleController">
            <button className="scaleBtn"><i className="fa-solid fa-plus"></i></button>
            <button className="scaleBtn"><i className="fa-solid fa-minus"></i></button>
            <button className="scaleBtn"><i className="fa-solid fa-arrows-rotate"></i></button>
        </div>

        <div id="controller" className="controller">
            <article className="fLine">
                <button className="ctrBtn" id="arrowKeysU"><i className="fa-solid fa-arrow-up"></i></button>
            </article>
            <article className="sLine">
                <button className="ctrBtn" id="arrowKeysL"><i className="fa-solid fa-arrow-left"></i></button>
                <button className="ctrBtn" id="arrowKeysD"><i className="fa-solid fa-circle"></i></button>
                <button className="ctrBtn" id="arrowKeysR"><i className="fa-solid fa-arrow-right"></i></button>
            </article>
            <article className="fLine">
                <button className="ctrBtn" id="arrowKeysU"><i className="fa-solid fa-arrow-down"></i></button>
            </article>
        </div>

    </div >
}
// class CulCanvas {
//     basicCanvas() {
//         const canvas = document.getElementById("canvas")
//         const pen = canvas.getContext("2d")
//         for (let i = 0; i < 500; i++) {
//             pen?.fillRect(i, 250, 2, 2)
//             pen?.fillRect(250, i, 2, 2)
//         }

//     }
//     print() {
//         this.basicCanvas()
//     }

// }
// const cvs = new CulCanvas();
// cvs.print();
export { Canvas, CanvasBtn };