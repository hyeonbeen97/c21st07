"use strict";
class InMatrix {
    constructor() {
        this.matrix = [
            [5, 6, 7],
            [8, 9, 10],
            [11, 12, 13],
            [14, 15, 16]
        ];
    }
    proess() {
        const result = [];
        for (let i = 0; i < this.matrix[0].length; i++) { // 열
            const row = [];
            for (let j = 0; j < this.matrix.length; j++) { // 행
                row.push(this.matrix[j][i]); // 행과 열 바꾸기
            }
            result.push(row);
        }
        document.write(String(result));
    }
    run() {
        this.proess;
    }
}
const inma = new InMatrix();
inma.run();
