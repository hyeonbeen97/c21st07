"use strict";
class Karma {
    constructor() {
    }
    init() {
        this.clickEvent();
    }
    clickEvent() {
        addEventListener("click", (e) => {
            switch (e.target.id) {
                case "box1":
                    alert("ds1");
                    break;
                case "box2":
                    alert("ds2");
                    break;
                case "box3":
                    alert("ds3");
                    break;
                case "box4":
                    alert("ds4");
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
