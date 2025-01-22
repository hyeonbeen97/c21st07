// 캔버스 타입스크립트
class Sik {
    baseA: number[][] = []
    resultA: number[][] = []
    constructor() {
        this.baseA = [
            [3, -1, -2],
            [-4, 2, 1],
            [1, 4, -3]
        ]

    }
    process() {
        let sum: number = 0

        for (let i = 0; i < 1; i++) {
            sum += this.baseA[i][i] * this.baseA[i + 1][i + 1] * this.baseA[i + 2][i + 2] +
                this.baseA[i][i + 1] * this.baseA[i + 1][i + 2] * this.baseA[i + 2][i] +
                this.baseA[i][i + 2] * this.baseA[i + 2][i + 1] * this.baseA[i + 1][i]
            console.log(this.baseA[i][i + 1])
        }

    }

    run() {
        this.process()
    }
}

const metrixSik = new Sik();
metrixSik.run();