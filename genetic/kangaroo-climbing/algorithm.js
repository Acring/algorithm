/**
 * Created by Acring on 2017/10/22.
 */
var Algorithm = (function () {
    function Algorithm() {
    }
    /**
     * 适应度函数
     */
    Algorithm.suitable = function (x) {
        return parseInt((-((x - 300) * sin((x - 300) / 50) * cos((x - 300) / 100)) + 500).toString()); // 返回整型
    };
    Algorithm.screen = function (kangaroo) {
        if (!kangaroo.length) {
            console.log('error', kangaroo);
            return;
        }
        var sum = 0;
        var probability = [];
        var surviveKangaroo = [];
        for (var x in kangaroo) {
            sum += kangaroo[x].suitable;
        }
        for (var _i = 0, kangaroo_1 = kangaroo; _i < kangaroo_1.length; _i++) {
            var k = kangaroo_1[_i];
            if (probability.length == 0) {
                probability.push(k.suitable / sum);
            }
            else {
                probability.push(k.suitable / sum + probability[probability.length - 1]);
            }
        }
        for (var x in kangaroo) {
            var point = Math.random();
            var index = 0;
            while (point > probability[index]) {
                index++;
            }
            surviveKangaroo.push(new Kangaroo(kangaroo[index].liveHorizon));
        }
        return surviveKangaroo;
    };
    return Algorithm;
}());
