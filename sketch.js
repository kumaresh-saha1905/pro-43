var iss,spaceCraft;
var hasDocked=false;
var backImage,issimg,scimg,scimg2,scimg3,scimg1;
function preload(){
  backImage=loadImage("s.jpg");
  issimg=loadImage("iss.png");
  scimg=loadImage("spacecraft1.png");
  scimg2=loadImage("spacecraft4.png");
  scimg3=loadImage("spacecraft3.png");
  scimg1=loadImage("spacecraft2.png");
 
  }
function setup() {
  createCanvas(displayWidth,displayHeight);
  //createSprite(400, 200, 50, 50);
  iss=createSprite(330,128);;
  iss.addImage(issimg);
  iss.scale=0.25;

  spaceCraft=createSprite(285,displayHeight-200);
  spaceCraft.addImage(scimg);
  spaceCraft.scale=0.15;
}


function draw() {
  background(backImage);
   if(!hasDocked){
     spaceCraft.x+=random(-1,+1);
     if(keyDown("UP_ARROW")){
       spaceCraft.y-=2;
       spaceCraft.addImage(scimg1);
     }
     if(keyDown("RIGHT_ARROW")){
       spaceCraft.x+=0.5;
       spaceCraft.addImage(scimg2);
     }
     if(keyDown("LEFT_ARROW")){
       spaceCraft.addImage(scimg3);
       spaceCraft.x-=0.5;
     }
     if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(scimg1);
     }
   }
   if(spaceCraft.isTouching(iss)){
     hasDocked=true;
     fill("blue");
     textSize(20);
     text("Docking Successful !!",displayWidth/2,displayHeight/3.5);
     fill("red");
     text("WOW , that's great. mission successful",displayWidth/2+230,displayHeight/3.5);
     spaceCraft.position.x=328;
     spaceCraft.position.y=160;
     spaceCraft.scale=0.09
   }

  drawSprites();
}