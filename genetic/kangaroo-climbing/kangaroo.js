/**
 * Created by Acring on 2017/10/22.
 */
var Kangaroo = (function () {
    function Kangaroo(Horizon) {
        this.horizonEncode = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if (Horizon == null) {
            console.error('Horizon is null');
            return;
        }
        this.liveHorizon = Horizon;
        this.suitable = Math.floor(Math.pow(Algorithm.suitable(this.liveHorizon), 2));
        this.liveHeight = Algorithm.suitable(Horizon);
        this._encodeHorizon();
    }
    /**
     * 基因编码
     * @private
     */
    Kangaroo.prototype._encodeHorizon = function () {
        var temp = this.liveHorizon;
        var pos = 0;
        while (temp > 0) {
            this.horizonEncode[pos] = temp % 2;
            temp = parseInt((temp / 2).toString());
            pos += 1;
        }
        return;
    };
    /**
     * 基因反编码
     * @private
     */
    Kangaroo.prototype._decodeHorizon = function () {
        this.liveHorizon = 0;
        var index = 0;
        for (var temp in this.horizonEncode) {
            this.liveHorizon += +this.horizonEncode[temp] * (Math.pow(2, index));
            index += 1;
        }
    };
    /**
     * 与另一只袋鼠进行基因交换
     * @param otherKangaroo 另一只袋鼠
     */
    Kangaroo.prototype._exchange = function (otherKangaroo) {
        if (Kangaroo.exProbability > Math.random() && otherKangaroo) {
            console.log('发生了基因交换');
            // console.log(`this: ${this.horizonEncode.toString()}, other: ${otherKangaroo.horizonEncode.toString()} ->`);
            var positionA = parseInt((Math.random() * (+this.horizonEncode.length - 1)).toString());
            var changeLength = parseInt((Math.random() * this.horizonEncode.length * Kangaroo.exProbability / 2).toString());
            var temp = void 0;
            temp = this.horizonEncode.splice(positionA, positionA + changeLength);
            (_a = this.horizonEncode).splice.apply(_a, [positionA, 0].concat(otherKangaroo.horizonEncode.splice(positionA, temp.length)));
            (_b = otherKangaroo.horizonEncode).splice.apply(_b, [positionA, 0].concat(temp));
            // console.log(`this: ${this.horizonEncode.toString()}, other: ${otherKangaroo.horizonEncode.toString()}`);
        }
        var _a, _b;
    };
    /**
     * 基因变异
     */
    Kangaroo.prototype._mutation = function () {
        var mutation = Kangaroo.muProbability - Math.random();
        if (mutation > 0) {
            // console.log(this.horizonEncode.toString());
            console.log("发生变异");
            // console.log(this.horizonEncode.toString(), '->');
            for (var x = mutation * 10; x > 0; x -= 1) {
                var pos = parseInt((Math.random() * (this.horizonEncode.length - 1)).toString());
                this.horizonEncode[pos] = this.horizonEncode[pos] ^ 1;
            }
            // console.log(this.horizonEncode.toString());
        }
    };
    /**
     * 遗传进化
     */
    Kangaroo.prototype.evolution = function (otherKangarous) {
        // console.log(otherKangarous);
        this._exchange(otherKangarous);
        this._mutation();
        this._decodeHorizon();
        this.suitable = Math.floor(Math.pow(Algorithm.suitable(this.liveHorizon), 2));
        this.liveHeight = Algorithm.suitable(this.liveHorizon);
        // console.log(this.liveHorizon);
    };
    return Kangaroo;
}());
Kangaroo.muProbability = 0.01;
Kangaroo.exProbability = 0.5;
