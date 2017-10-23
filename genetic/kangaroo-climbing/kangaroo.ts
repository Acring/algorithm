

/**
 * Created by Acring on 2017/10/22.
 */
class Kangaroo{
    static muProbability: number = 0.2;
    static exProbability: number = 0.9;
    horizonEncode: number[] = [0,0,0,0,0,0,0,0,0,0];
    liveHeight: number;
    liveHorizon: number;
    suitable:number; // 适应度,本例中就是所处高度

    constructor(Horizon){
        if(Horizon == null){
            console.error('Horizon is null');
            return;
        }
        this.liveHorizon = Horizon;
        this.suitable = Algorithm.suitable(Horizon);
        this.liveHeight = this.suitable;
        this._encodeHorizon();
    }

    /**
     * 基因编码
     * @private
     */
    _encodeHorizon(){
        let temp: number = this.liveHorizon;
        let pos = 0;
        while(temp > 0){
            this.horizonEncode[pos] = temp%2;
            temp = parseInt((temp/2).toString());
            pos += 1;
        }
        return;
    }

    /**
     * 基因反编码
     * @private
     */
    _decodeHorizon(){
        this.liveHorizon = 0;
        let index = 0;
        for(let temp in this.horizonEncode){
            this.liveHorizon += +this.horizonEncode[temp] * (2**index);
            index += 1;
        }
    }

    /**
     * 与另一只袋鼠进行基因交换
     * @param otherKangaroo 另一只袋鼠
     */
    _exchange(otherKangaroo){
        if(Kangaroo.exProbability > Math.random() && otherKangaroo){
            // console.log('发生了基因交换');

            let positionA: number = Math.random()*(+this.horizonEncode.length - 1);
            let changeLength: number = Math.random()*this.horizonEncode.length * Kangaroo.exProbability/2;
            let temp;

            temp = this.horizonEncode.splice(positionA,positionA + changeLength);
            // let positionB: number = Math.random()*(+otherKangaroo.horizonEncode.length - temp.length); // 防止交换长度不同
            this.horizonEncode.splice(positionA, 0, ...otherKangaroo.horizonEncode.splice(positionA, temp.length));
            otherKangaroo.horizonEncode.splice(positionA, 0, ...temp);
        }
    }

    /**
     * 基因变异
     */
    _mutation(){
        let mutation = Kangaroo.muProbability -  Math.random();
            // console.log("发生变异");
            // console.log(this.horizonEncode.toString());
        if(mutation > 0){  // 发生变异
            for(let x = mutation*10; x > 0; x -= 1){
                let pos = parseInt((Math.random()*(this.horizonEncode.length - 1)).toString());
                this.horizonEncode[pos] = this.horizonEncode[pos] ^ 1;
            }
            // console.log(this.horizonEncode.toString());
        }
    }

    /**
     * 遗传进化
     */
    evolution(otherKangarous?:Kangaroo){
        // console.log(otherKangarous);
        this._exchange(otherKangarous);
        this._mutation();
        this._decodeHorizon();
        this.suitable = Algorithm.suitable(this.liveHorizon);
        // console.log(this.liveHorizon);
    }
}