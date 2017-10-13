function BoardCover(){
	/**
	 * @param drowMap
	 * @param map 棋盘矩阵
	 * @param n 起始x下标
	 * @param m 起始y下标
	 * @param r
	 * @param step 可控步数，用来一步步显示覆盖过程
	 * @param currStep 当前步数
	 **/
	this.coverBoard = function(drowMap,map, n, m, r, step, currStep=1){
        where = judgeWhere(map, n, m, r);
        drowMap[n + r/2-1][m + r/2-1] = where;
        // console.log("drowMap\n", drowMap);
        // console.log("map\n", map);
        if(r !== 2 && currStep < step){
	        this.coverBoard(drowMap, map, n, m, r/2, step, currStep+1);
            this.coverBoard(drowMap, map, n, m + r/2, r/2, step, currStep+1);
            this.coverBoard(drowMap, map, n + r/2, m, r/2, step, currStep+1);
            this.coverBoard(drowMap, map, n + r/2, m + r/2, r/2, step, currStep+1);
		}
	};

	function judgeWhere(map, n, m, r){
		for(let i = 0; i < r; i++){
			for(let j = 0; j < r; j++){
				if(map[n+i][m+j] === 1){
					if(i >= r/2 && j >= r/2){
						map[n+r/2-1][m+r/2-1] = 1;
						map[n+r/2-1][m+r/2] = 1;
						map[n+r/2][m+r/2-1] = 1;
						return 1;
					}
					if(i >= r/2 && j < r/2){
						map[n+r/2-1][m+r/2-1] = 1;
						map[n+r/2-1][m+r/2] = 1;
						map[n+r/2][m+r/2] = 1;
						return 2;
					}
					if(i < r/2 && j >= r/2){
						map[n+r/2-1][m+r/2-1] = 1;
						map[n+r/2][m+r/2-1] = 1;
						map[n+r/2][m+r/2] = 1;
						return 3;
					}
					if(i < r/2 && j < r/2){
						map[n+r/2][m+r/2-1] = 1;
						map[n+r/2-1][m+r/2] = 1;
						map[n+r/2][m+r/2] = 1;
						return 4;
					}
				}
			}
		}
	}
}
function getMap(k){
    let tArray = new Array(2**k);
    for(let i = 0; i < 2**k; i++){
        tArray[i] = new Array(2**k);
        for(let j = 0; j < 2**k; j++){
            tArray[i][j] = 0;
        }
    }
    return tArray;
}

function main() {
    boardCover = new BoardCover();
    map = getMap(3);
    map[6][3] = 1;
    console.log("map\n",map);
    drowMap = getMap(3);

    boardCover.coverBoard(drowMap, map, 0, 0, 8, 1, 1);

    console.log("drowMap\n" , drowMap);
    console.log("map\n",map);
}

main();