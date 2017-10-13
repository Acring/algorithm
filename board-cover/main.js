var map;
var r = 30;
var spcRectI;
var spcRectJ;
var myMap;
var drowMap;
var step;
var k;
var pen;
window.onload = function(){
	let canvas = document.getElementById("canvas");
	let pen = canvas.getContext("2d");
	let myPen = new Board();
	myPen.showABCD();
	
	canvas.width  = 1000;
	canvas.height = 1000;
	
    drowBoard('3');
};

function getRandom(k){
	return parseInt(Math.random()*(2**k));
}

function getMap(){

	let tArray = new Array(2**k);
	for(let i = 0; i < 2**k; i++){
		tArray[i] = new Array(2**k);
		for(let j = 0; j < 2**k; j++){
			tArray[i][j] = 0;
		}
	}
	return tArray;
}
function nextStep() {
    step++;
	let board = new Board();
	let boardCover = new BoardCover();
    myMap = getMap();
    myMap[spcRectI][spcRectJ] = 1;
    drowMap = getMap();
    boardCover.coverBoard(drowMap, myMap, 0,0,2**k, step, 1);
    board.drowByMap(pen, drowMap, beginXY, r);
}
function drowBoard(strk){

    step = 0;
	k = Number(strk);
	if (isNaN(k) || k == 0) {
		alert("输入参数不正确,请输入数字");
		return;
	}
	if(k > 5){
		alert("输入数字过大");
		return;
	}
	if (k < 0) {
		alert("不能是负数");
		return;
	}
	let canvas = document.getElementById("canvas");
	pen = canvas.getContext("2d");
	pen.fillStyle = '#000000';
	console.log(pen.fillStyle)
	pen.clearRect(0,0,canvas.width, canvas.height);
	let board = new Board();


	beginXY = (canvas.width/2 - 2**(k - 1) * r);
    board.drowBoard(pen, beginXY, 0, r, 2 ** k);
	spcRectI = getRandom(k);
	spcRectJ = getRandom(k);
	board.drowRect(pen, beginXY+spcRectJ*r, spcRectI*r, r,'dark');

	myMap = getMap();
    myMap[spcRectI][spcRectJ] = 1;
	drowMap = getMap();

	// boardCover = new BoardCover();
	// boardCover.coverBoard(drowMap, myMap, 0,0,2**k, 1, 1);
	// board.drowByMap(pen, drowMap, beginXY, r);

}