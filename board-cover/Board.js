
function Board() {

    /**
     * 画棋盘
     * @param pen
     * @param x
     * @param y
     * @param r
     * @param n
     */
    this.drowBoard = function(pen,x, y, r, n){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                this.drowEmptyRect(pen, x + j * r, y +i * r, r);
            }
        }
    };
    /**
     * 画单个矩形
     * @param pen
     * @param x
     * @param y
     * @param r
     * @param color
     */
    this.drowRect = function (pen, x, y, r, color){
        pen.beginPath();
        pen.moveTo(x, y);
        pen.lineTo(x+r, y);
        pen.lineTo(x+r, y+r);
        pen.lineTo(x, y+r);
        pen.lineTo(x, y);
        pen.closePath();
        pen.fillStyle = color;

        pen.fill();
        pen.stroke();
    }
    /**
     * A 类型骨型牌
     * @param pen
     * @param x
     * @param y
     * @param r
     */
    this.drowRectA = function (pen, x, y, r){
        let color = "red";
        this.drowRect(pen, x, y, r, color);
        this.drowRect(pen, x + r, y, r, color);
        this.drowRect(pen, x, y + r, r, color);
    };

    /**
     * B类型骨型牌
     * @param pen
     * @param x
     * @param y
     * @param r
     */
    this.drowRectB = function (pen, x, y, r){
        let color = "green";
        this.drowRect(pen, x, y, r, color);
        this.drowRect(pen, x+r, y, r, color);
        this.drowRect(pen, x+r, y+r, r, color);

    }


    this.drowRectC = function (pen, x, y, r){
        let color = "blue";
        this.drowRect(pen, x, y, r, color);
        this.drowRect(pen, x, y+r, r, color);
        this.drowRect(pen, x+r, y+r, r, color);
    }

    this.drowRectD = function (pen, x, y, r){
        let color = "yellow";
        this.drowRect(pen, x+r, y, r, color);
        this.drowRect(pen, x, y+r, r, color);
        this.drowRect(pen, x+r, y+r, r, color);
    };

    /**
     * 画棋盘中的一个矩形
     * @param pen
     * @param x
     * @param y
     * @param r
     */
    this.drowEmptyRect = function (pen, x, y, r){
        pen.beginPath();
        pen.moveTo(x, y);
        pen.lineTo(x+r, y);
        pen.lineTo(x+r, y+r);
        pen.lineTo(x, y+r);
        pen.lineTo(x, y);
        pen.closePath();
        pen.strokeStyle = "gray";
        pen.stroke();

    };
    /**
     * 画ABCD类型骨型牌
     */
    this.showABCD = function (){
        let AType = document.getElementById("AType");
        let Apen = AType.getContext("2d");
        this.drowRectA(Apen, 0,0, 50);

        let BType = document.getElementById("BType");
        let Bpen = BType.getContext("2d");
        this.drowRectB(Bpen, 0,0, 50);

        let CType = document.getElementById("CType");
        let Cpen = CType.getContext("2d");
        this.drowRectC(Cpen, 0,0, 50);

        let DType = document.getElementById("DType");
        let Dpen = DType.getContext("2d");
        this.drowRectD(Dpen, 0,0, 50);

    }

    this.drowByMap = function(pen, drowMap, beginXY, r){
        for(let i = 0; i < drowMap.length; i++){
            for(let j = 0; j < drowMap.length; j++){
                if(drowMap[i][j] === 1){
                    this.drowRectA(pen,beginXY+j*r, i*r, r)
                }
                if(drowMap[i][j] === 2){
                    this.drowRectB(pen,beginXY+j*r, i*r, r)
                }
                if(drowMap[i][j] === 3){
                    this.drowRectC(pen,beginXY+j*r, i*r, r)
                }
                if(drowMap[i][j] === 4){
                    this.drowRectD(pen,beginXY+j*r, i*r, r)
                }
            }
        }
    }

}