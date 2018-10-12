var cols = 10;
var rows = 10;
var grid = new Array(cols);
var rectSize = 20;

function Cell(){
	this.x = 0;
	this.y = 0;
}

function setup() {
  createCanvas(cols*rectSize+1,rows*rectSize+1);
  grid = makeArr2D();
}

function draw() {
  background(51);
  
  drawGrid();
}

function drawGrid(){
  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      rect(i*rectSize,j*rectSize,rectSize,rectSize);
    }
  }
}

function makeArr2D(){
  var arr = new Array(cols);
	for(var i = 0; i < cols; i++){
	  for(var j = 0; j < rows; j++){
	    arr[i] = new Cell(i, j);
	  }
	}
	return arr;
}