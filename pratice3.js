// 캔버스 타입스크립트
var Sik = /** @class */ (function () {
    function Sik() {
        this.baseA = [];
        this.resultA = [];
        this.baseA = [
            [3, -1, -2],
            [-4, 2, 1],
            [1, 4, -3]
        ];
    }
    Sik.prototype.process = function () {
        var sum = 0;
        for (var i = 0; i < 1; i++) {
            sum += this.baseA[i][i] * this.baseA[i + 1][i + 1] * this.baseA[i + 2][i + 2] +
                this.baseA[i][i + 1] * this.baseA[i + 1][i + 2] * this.baseA[i + 2][i] +
                this.baseA[i][i + 2] * this.baseA[i + 2][i + 1] * this.baseA[i + 1][i];
            console.log(this.baseA[i][i + 1]);
        }
    };
    Sik.prototype.run = function () {
        this.process();
    };
    return Sik;
}());
var metrixSik = new Sik();
metrixSik.run();
