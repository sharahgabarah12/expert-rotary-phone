var thief1,thief2,thief3;
var treasure,bg,restart,life,gameOver,thief1Group;

var thief1_img,thief2_img,thief3_img,gameOver_img;
var treasure_img,bg_img,restart_img,life_img;

var gameState = "END";
var score = 0;

function setup (){
    createCanvas(windowWidth,windowHeight);
}

function preload (){

    thief1_img = loadImage("theif_run.png");
    thief2_img = loadImage("theif_nomal.png");
    thief3_img = loadImage("thief_crouching.png");
    treasure_img = loadImage("treasure.png");
    restart_img = loadImage("restart.png");
    life_img = loadImage("life.png");
    bg_img = loadImage("landspaces.jpeg");
    gameOver_img = loadImage("gameOver.png")
}

function draw (){
    background("white");
    thiefrunning();
    drawSprites();
}
function thiefrunning (){
    thief1 = createSprite(50,20,40,40);
    //thief1.addImage("thief1",thief1_img);
    //thief1.scale = 0.1;
    //thief1.velocityX = -(6 + 3*score/100);
    //thief1.lifetime = 400;
    //thief1Group.add(thief1);
  }
  function drawredBubble(){
    redbubble = createSprite(800,random(20,780),40,40);
    redbubble.addImage(redBubbleImg);
    redbubble.scale = 0.1;
    redbubble.velocityX = -8;
    redbubble.lifetime = 400;
    redBubbleGroup.add(redbubble);
  }
  
  function shootBullet(){
    bullet= createSprite(150, width/2, 50,20)
    bullet.y= gun.y-20
    bullet.addImage(bulletImg)
    bullet.scale=0.12
    bullet.velocityX= 7
    bulletGroup.add(bullet)
  }