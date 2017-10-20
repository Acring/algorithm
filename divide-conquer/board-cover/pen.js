function drowBoard(pen,x, y, r, n){
	for(let i = 0; i < n; i++){
		for(let j = 0; j < n; j++){
			drowEmptyRect(pen, x + j * r, y +i * r, r);
		}
	}
}
function drowRect(pen, x, y, r, color){
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

function drowRectA(pen, x, y, r){
	let color = "red";
	drowRect(pen, x, y, r, color);
	drowRect(pen, x + r, y, r, color);
	drowRect(pen, x, y + r, r, color);
}

function drowRectB(pen, x, y, r){
	let color = "green";
	drowRect(pen, x, y, r, color);
	drowRect(pen, x+r, y, r, color);
	drowRect(pen, x+r, y+r, r, color);
	
}
function drowRectC(pen, x, y, r){
	let color = "blue";
	drowRect(pen, x, y, r, color);
	drowRect(pen, x, y+r, r, color);
	drowRect(pen, x+r, y+r, r, color);
}

function drowRectD(pen, x, y, r){
	let color = "yellow";
	drowRect(pen, x+r, y, r, color);
	drowRect(pen, x, y+r, r, color);
	drowRect(pen, x+r, y+r, r, color);
}

function drowEmptyRect(pen, x, y, r){
	pen.beginPath();
	pen.moveTo(x, y);
	pen.lineTo(x+r, y);
	pen.lineTo(x+r, y+r);
	pen.lineTo(x, y+r);
	pen.lineTo(x, y);
	pen.closePath();
	pen.strokeStyle = "gray";
	pen.stroke();

}

function showABCD(){
	let AType = document.getElementById("AType");
	let Apen = AType.getContext("2d");
	drowRectA(Apen, 0,0, 50);

	let BType = document.getElementById("BType");
	let Bpen = BType.getContext("2d");
	drowRectB(Bpen, 0,0, 50);

	let CType = document.getElementById("CType");
	let Cpen = CType.getContext("2d");
	drowRectC(Cpen, 0,0, 50);
	
	let DType = document.getElementById("DType");
	let Dpen = DType.getContext("2d");
	drowRectD(Dpen, 0,0, 50);
	
}

