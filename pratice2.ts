// 캔버스 타입스크립트
class CenterGravity {
    base: number
    hypotenuse: number
    height: number
    constructor() {
        this.base = 0
        this.hypotenuse = 0
        this.height = 0
    }
    value() {
        const baseDoc = <HTMLInputElement>document.getElementById("base")
        this.base = Number(baseDoc.value)
        const hypotenuseDoc = <HTMLInputElement>document.getElementById("hypotenuse")
        this.hypotenuse = Number(hypotenuseDoc.value)
        const heightDoc = <HTMLInputElement>document.getElementById("height")
        this.height = Number(heightDoc.value)
    }
    input() {
        const canvas = <HTMLCanvasElement>document.getElementById("canvas")
        const mypen = canvas.getContext("2d")
        mypen?.fillRect(200, 200, 3, 3)
        addEventListener("click", (e) => {
            const target = <HTMLElement>e.target;
            switch (target.id) {
                case "btn":
                    this.value()
                    console.log(this.base, this.hypotenuse, this.height)
            }
        })
    }

    run() {
        this.input()
    }
}

const centerGravity = new CenterGravity();
centerGravity.run();