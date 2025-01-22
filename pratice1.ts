class Boul {
    boulMatrixA: any[][]
    boulMatrixB: any[][]
    constructor() {
        this.boulMatrixA = [
            [true, false, false],
            [true, true, true]

        ]
        this.boulMatrixB = [
            [false, true],
            [true, true],
            [true, false]
        ]
    }
    process() {
        let result: any[][] = []
        for (let i = 0; i < this.boulMatrixA.length; i++) {
            let temp: boolean[][] = []
            for (let j = 0; j < this.boulMatrixB[0].length; j++) {
                let a3: any = false
                for (let k = 0; k < this.boulMatrixA[0].length; k++) {
                    a3 += this.boulMatrixA[i][k] * this.boulMatrixB[k][j]

                }
                temp.push(a3)

            }
            result.push(temp)
            console.log(result)

        }
    }
    run() {
        this.process()
    }

}
const boul = new Boul
