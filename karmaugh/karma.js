"use strict";
class Karma {
    constructor() { }
    init() {
        this.clickEvent();
    }
    clickEvent() {
        addEventListener("click", (e) => {
            switch (e.target.id) {
                case "box1":
                    e.target.classList.toggle("red");
                    break;
                case "box2":
                    e.target.classList.toggle("red");
                    break;
                case "box3":
                    e.target.classList.toggle("red");
                    `  `;
                    break;
                case "box4":
                    e.target.classList.toggle("red");
                    break;
            }
        });
    }
    run() {
        this.init();
    }
}
const view = new Karma();
view.run();
