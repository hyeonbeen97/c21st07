var InMatrix = /** @class */ (function () {
    function InMatrix() {
        this.matrix = [
            [5, 6, 7],
            [8, 9, 10],
            [11, 12, 13],
            [14, 15, 16]
        ];
    }
    InMatrix.prototype.proess = function () {
        var result = [];
        for (var i = 0; i < this.matrix[0].length; i++) { // 열
            var row = [];
            for (var j = 0; j < this.matrix.length; j++) { // 행
                row.push(this.matrix[j][i]); // 행과 열 바꾸기
            }
            result.push(row);
        }
    };
    InMatrix.prototype.run = function () {
        this.proess;
    };
    return InMatrix;
}());
var inma = new InMatrix();
inma.run();
