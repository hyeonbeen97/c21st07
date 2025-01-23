class Array {
    constructor() {
        this.array = [
            [0, 1],
            [0, 1],
            [0, 1]
        ]
    }
    process() {
        for (let x = 0; x < this.array[0].length; x++) {
            for (let y = 0; y < this.array[x].length; y++) {
                for (let z = 0; z < this.array[y].length; z++) {
                    let xR = this.array[0][x] === 1 ? 0 : 1;
                    let yR = this.array[0][x] === 1 ? 0 : 1;
                    let zR = this.array[0][x] === 1 ? 0 : 1;

                    let xyz = xR &&

                        console.log(this.array[0][x], this.array[1][y], this.array[2][z])
                    console.log(xR, yR, zR)


                }
            }
        }
    }
    run() {
        this.process()
    }

}
const myA = new Array()
myA.run()