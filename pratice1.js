var Boul = /** @class */ (function () {
    function Boul() {
        this.boulMatrixA = [
            [true, false, false],
            [true, true, true]
        ];
        this.boulMatrixB = [
            [false, true],
            [true, true],
            [true, false]
        ];
    }
    Boul.prototype.process = function () {
        var result = [];
        for (var i = 0; i < this.boulMatrixA.length; i++) {
            var temp = [];
            for (var j = 0; j < this.boulMatrixB[0].length; j++) {
                var a3 = false;
                for (var k = 0; k < this.boulMatrixB[0].length; k++) {
                    a3 += this.boulMatrixA[i][k] * this.boulMatrixB[k][j];
                }
                temp.push(a3);
            }
            result.push(temp);
            console.log(result);
        }
    };
    Boul.prototype.run = function () {
        this.process();
    };
    return Boul;
}());
var boul = new Boul;
boul.run();
