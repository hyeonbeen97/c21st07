class Canvas {
    canvas() {
        const canvas = document.getElementById("canvas")
        const mypen = canvas.getContext("2d")
        for (let i = 0; i < 500; i++) {
            mypen.fillRect(250, i, 1, 1)
            mypen.fillRect(i, 250, 1, 1)

        }
    }
}
const myc = new Canvas()
myc.canvas()