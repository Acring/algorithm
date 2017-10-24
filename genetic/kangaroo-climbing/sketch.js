let steps = 0.5;  // 点距
let numberOfKangaroo = 100;  // 袋鼠数量
let kangarooList = [];
let autoRun = false;
let move = false;
let generatinos;
function setup() {
    generatinos = document.getElementById('generations');
   	let canvas = createCanvas(1000, 1000);
  	// Move the canvas so it's inside our <div id="sketch-holder">.
  	canvas.parent('sketch-holder');
  	background(255,255,255);
    frameRate(1);  // 设置速度
    initKangaroo();  // 初始化袋鼠
    moveAStep();
}
/**
 * p5 绘制函数
 */
function draw() {
    if(autoRun || move){ // 自动进化或手动进化一次
        if(move){ //
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


    }
    for(let k = 0; k < kangarooList.length; k++){
        let otherK = kangarooList[k+1];
        if(!otherK){
            break;
        }
        kangarooList[k].evolution(otherK);
    }
    kangarooList = Algorithm.screen(kangarooList);
    kangarooList.sort(sortKangaroo);
    addGenerations();
}

function drawLand(horizon){
	let y = Algorithm.suitable(horizon);
    let r = 3;
    fill(color('#91B493'));
    noStroke();
    ellipse(horizon, 1000-y, r, r);
}

function drawKangarou(horizon, ) {
    if(horizon > 1000){
        horizon = 1000;
    }
    let y = Algorithm.suitable(horizon);
    let r = 10;
    fill(color(Math.random()*256,Math.random()*256, Math.random()*256 ));
    noStroke();
    ellipse(horizon, 1000-y, r, r);
}

function initKangaroo(){
    kangarooList = [];
    for(let x = 0; x < numberOfKangaroo; x++){
        let horizon = parseInt(Math.random() * 1000);
        kangarooList.push(new Kangaroo(horizon));
    }
    kangarooList.sort(sortKangaroo);
    autoRun = false;
}

function sortKangaroo(kangarooA, kangarooB){ // 对袋鼠进行排序，保证近处的袋鼠进行交配
    return kangarooA.liveHorizon > kangarooB.liveHorizon;
}
/**
 * 进行一次手动进化
 */
function setMove(){
    move = true;
}

function setAutoRun() {
    autoRun = autoRun !== true;
}

function addGenerations() {
    generatinos.textContent = parseInt(generatinos.textContent) + 1;
}

function resetWorld(nok, mr, er) {
    nok = +nok;
    mr = + mr;
    er = +er;
    if(isNaN(nok) || isNaN(mr) || isNaN(er)){
        return;
    }
    console.log(nok,mr,er);
    if(nok > 1000){
        alert('袋鼠太多挤不下啦');
        return;
    }
    if(nok < 0){
        alert('袋鼠太少啦');
        return;
    }
    if(mr > 1 || er > 1){
        alert('变异率或交换率太大');
        return;
    }
    if(mr < 0 || er < 0){
        alert('变异率或交换率太小');
        return;
    }
    numberOfKangaroo = nok;
    Kangaroo.mutationRate = mr;
    Kangaroo.exchangeRate = er;

    console.debug('reset');
    generatinos.textContent = '0';
    initKangaroo();
    moveAStep();
}