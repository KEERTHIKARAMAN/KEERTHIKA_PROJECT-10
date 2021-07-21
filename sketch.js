var sea,seaImage;
var ship,shipImg1,shipImg2;

function preload(){
seaImage=loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-2.png");
  shipImg2=loadAnimation("ship-3.png","ship-3.png","ship-4.png","ship-3.png");
}

function setup(){
  createCanvas(1600,750);
  sea=createSprite(400);
  sea.addImage(seaImage);
  sea.velocityX=-5;
  ship=createSprite(400,350,50,50);
  ship.scale=1;
  ship.addAnimation("moving",shipImg1);
  ship.addAnimation("shiplightOn",shipImg2);
  
}

function draw() {
  background("blue");
  
  if(sea.x<0)
    {
      sea.x=sea.width/2;
    }
  
  if(keyDown("space"))
    {
      ship.changeAnimation("shiplightOn",shipImg2);
    }
  
 drawSprites();
}