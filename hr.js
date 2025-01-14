var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Sum = /** @class */ (function () {
    function Sum() {
        this.a1 = [
            [0, 6, 1],
            [3, 5, 2],
        ];
        this.a2 = [
            [1, 0, 2],
            [9, 3, 8],
            [4, 7, 5],
        ];
    }
    Sum.prototype.por = function () {
        var f1 = __spreadArray([], this.a1, true);
        var f2 = __spreadArray([], this.a2, true);
        for (var i = 0; i < f1.length; i++) {
            var temp = [];
            for (var j = 0; j < f1[0].length; j++) {
                var a3 = 0;
                for (var k = 0; k < f1[0].length; k++) {
                    a3 += f1[i][k] * f2[k][j];
                }
                temp.push(a3);
            }
            console.log(temp);
        }
    };
    return Sum;
}());
var myA = new Sum();
