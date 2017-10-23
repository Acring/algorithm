let steps = 3;  // 点距
let numberOfKangaroo = 10;  // 袋鼠数量
let kangarooList = [];
let autoRun = false;
let move = false;
function setup() {

   	let canvas = createCanvas(1000, 1000);
  	// Move the canvas so it's inside our <div id="sketch-holder">.
  	canvas.parent('sketch-holder');
  	background(255,255,255);
    frameRate(1);  // 设置速度
    initKangaroo();  // 初始化袋鼠
    moveAStep();
}

// function suitable(x){
// 	const Pi = 3.1415926;
// 	y = x*sin((1/3)*Pi*x)*cos((1/2)*x)+26;
// 	return y;
// }

function draw() {
    if(autoRun || move){
        if(move){
            move = false;
        }
        moveAStep();
    }
}

function moveAStep(){
    background(255,255,255);
    for(horizon = 0; horizon < 1000; horizon += steps){
        drawLand(horizon);
    }
    for(let k = 0; k < kangarooList.length; k++){
        drawKangarou(kangarooList[k].liveHorizon);

        let otherK = kangarooList[k+1];
        if(!otherK){
            break;
        }
        kangarooList[k].evolution(otherK);
    }
    kangarooList = Algorithm.screen(kangarooList);
    kangarooList.sort(sortKangaroo);
    console.log(kangarooList);
}

function drawLand(horizon){
	let y = Algorithm.suitable(horizon);
	let r = 3;
	fill(color('#91B493'));
	noStroke();
    ellipse(horizon, 1000-y, r, r);
}

function drawKangarou(horizon) {
    if(horizon > 1000){
        horizon = 1000;
    }
    let y = Algorithm.suitable(horizon);
    let r = 5;
    fill(color('#000000'));
    noStroke();
    ellipse(horizon, 1000-y, r, r);
}

function initKangaroo(){
    for(let x = 0; x < numberOfKangaroo; x++){
        let horizon = parseInt(Math.random() * 1000);
        kangarooList.push(new Kangaroo(horizon));
    }
    kangarooList.sort(sortKangaroo);
    console.log(kangarooList);
}

function sortKangaroo(kangarooA, kangarooB){
    return kangarooA.liveHorizon > kangarooB.liveHorizon;
}

function setMove(){
    move = true;
}