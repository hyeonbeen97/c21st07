var CenterGravity = /** @class */ (function () {
    function CenterGravity() {
        this.base = 0;
        this.hypotenuse = 0;
        this.height = 0;
    }
    CenterGravity.prototype.value = function () {
        var baseDoc = document.getElementById("base");
        this.base = Number(baseDoc.value);
        var hypotenuseDoc = document.getElementById("hypotenuse");
        this.hypotenuse = Number(hypotenuseDoc.value);
        var heightDoc = document.getElementById("height");
        this.height = Number(heightDoc.value);
    };
    CenterGravity.prototype.input = function () {
        var _this = this;
        var canvas = document.getElementById("canvas");
        var mypen = canvas.getContext("2d");
        mypen === null || mypen === void 0 ? void 0 : mypen.fillRect(200, 200, 3, 3);
        addEventListener("click", function (e) {
            var target = e.target;
            switch (target.id) {
                case "btn":
                    _this.value();
                    console.log(_this.base, _this.hypotenuse, _this.height);
            }
        });
    };
    CenterGravity.prototype.run = function () {
        this.input();
    };
    return CenterGravity;
}());
var centerGravity = new CenterGravity();
centerGravity.run();
