/**
 * Created by Acring on 2017/10/22.
 */
var Algorithm = /** @class */ (function () {
    function Algorithm() {
    }
    /**
     * 适应度函数
     */
    Algorithm.suitable = function (x) {
        return parseInt((2 * x / 5 * sin(x / 50) * cos(x / 100) + 700).toString()); // 返回整型
    };
    Algorithm.screen = function (kangaroo) {
        if (!kangaroo.length) {
            console.log('error', kangaroo);
            return;
        }
        console.log('screen');
        console.log(kangaroo);
        var sum = 0;
        var probability = [];
        var surviveKangaroo = [];
        for (var x in kangaroo) {
            sum += kangaroo[x].suitable;
        }
        console.log(sum);
        for (var _i = 0, kangaroo_1 = kangaroo; _i < kangaroo_1.length; _i++) {
            var k = kangaroo_1[_i];
            if (probability.length == 0) {
                probability.push(k.suitable / sum);
            }
            else {
                probability.push(k.suitable / sum + probability[probability.length - 1]);
            }
        }
        console.log(probability);
        for (var x in kangaroo) {
            var point = Math.random();
            var index = 0;
            while (point > probability[index]) {
                index++;
            }
            surviveKangaroo.push(kangaroo[index]);
            console.log('push', point, index, kangaroo[index]);
        }
        console.log(surviveKangaroo);
        return surviveKangaroo;
    };
    return Algorithm;
}());
