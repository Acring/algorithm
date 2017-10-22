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
        return parseInt((2 * x / 5 * sin(x / 50) * cos(x / 100) + 700).toString()); // 返回整型
    };
    return Algorithm;
}());
