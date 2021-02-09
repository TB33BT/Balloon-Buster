

var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var rGroup, pGroup, bGroup, gGroup, arrowGroup;
var score

 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600,500);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow=createSprite(500,220,10,10);
  bow.addImage(bowImage);
 
  score = 0;
  
  rGroup =new Group();
  gGroup =new Group();
  pGroup =new Group();
  bGroup =new Group();
  arrowGroup =new Group();
  
}

function draw() {
  // moving ground
    background.velocityX = -3 

     if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  //selecting balloons randomly and spawning them every 80 framecounts
  if (keyDown('space')){
    createArrow();
  }
  
  var rand=Math.round(random(1,4));
  if(frameCount%80==0){
    if(rand==1){
      redBalloon();
    }
    else if(rand==3){
      greenBalloon();
    }
    else if(rand==2){
      pinkBalloon();
    }
    else{
      blueBalloon();
    }
  }
  drawSprites();
  
  if(rGroup.isTouching(arrowGroup)){
    score=score+1;
    rGroup.destroyEach();
    arrowGroup.destroyEach();
  }
  
  if(gGroup.isTouching(arrowGroup)){
    score=score+2;
    gGroup.destroyEach();
    arrowGroup.destroyEach();
  }
  
  if(bGroup.isTouching(arrowGroup)){
    score=score-1;
    bGroup.destroyEach();
    arrowGroup.destroyEach();
  }
  
  if(pGroup.isTouching(arrowGroup)){
    score=score+3;
    pGroup.destroyEach();
    arrowGroup.destroyEach();
  }
  
  text("Score: "+ score,500,50);
}



function redBalloon() {
  // redBalloon
  var rand=Math.round(random(20,370));
  var red=createSprite(0,rand,10,10);
  red.addImage(red_balloonImage);
  red.scale=0.1;
  rGroup.add(red);
  red.velocityX=3;
  red.lifetime=300;
}

function blueBalloon() {
  //Blue Balloon
  var rand=Math.round(random(20,370));
  var blue=createSprite(0,rand,10,10);
  blue.addImage(blue_balloonImage);
  blue.scale=0.1;
  bGroup.add(blue);
  blue.velocityX=3;
  blue.lifetime=300;
}

function greenBalloon() {
 // green Balloon
  var rand=Math.round(random(20,370));
  var green=createSprite(0,rand,10,10);
  green.addImage(green_balloonImage);
  green.scale=0.1;
  gGroup.add(green);
  green.velocityX=3;
  green.lifetime=300;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.scale = 1
  pGroup.add(pink);
  pink.lifetime=300; 
}


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  return arrow;
}

