var canvasWidth;
var canvasHeight;
var vehicle1;
var positionVectorArr;
var mouseVector;

function preload()
{
  canvasWidth = 700;
  canvasHeight = 500;
}

function setup()
{
  positionVectorArr = new Array();
  var xInit = canvasWidth/2;
  var yInit = canvasHeight/2;
  var radius = 200;
  var numberOfPoints = 50;
  var angleIncrement = 2 * Math.PI/numberOfPoints;

  createCanvas(canvasWidth, canvasHeight);
  vehicle1 = new SimpleVehicle(400, 50, 30, 4, .4);

  for(var i = 0; i< 2 * Math.PI; i+= angleIncrement)
  {
    console.log("pushed");
    let xPoint = xInit + Math.cos(i) * radius;
    let yPoint = yInit + Math.sin(i) * radius;
    let temp = createVector(xPoint, yPoint);
    positionVectorArr.push(temp)
  }

  mouseVector = createVector(mouseX, mouseY);
}

function draw()
{
  frameRate(60);
  background(51);
  stroke('white')
  strokeWeight(3);
  fill('pink')
  for (var j = 0; j < positionVectorArr.length; j++)
  {
    if(j == positionVectorArr.length-1)
    {
      line(positionVectorArr[j].x, positionVectorArr[j].y, positionVectorArr[0].x, positionVectorArr[0].y)
    }
    else
    {
      line(positionVectorArr[j].x, positionVectorArr[j].y, positionVectorArr[j+1].x, positionVectorArr[j+1].y);
    }
  }
  vehicle1.flee(mouseVector);
  vehicle1.path(positionVectorArr);
  vehicle1.eulerUpdate();
  vehicle1.display();

  mouseVector.x = mouseX;
  mouseVector.y = mouseY;
}
