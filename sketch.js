var player
var canvas;
var main;
var arrow;
var count = 20;
var arrowI;
var pos;
var yes;
var still1;
var stillGroup
var inv1;
var invGR;
var still2
var still3;
var stand;
var stand2;
var stand3;
var stand4;
var stand5;
var gameState="play"
var mo1;
var edge1;
var edge2;
var enemy1;
var enemyGroup;
var standGR;
var ground;
function preload(){
  main = loadImage("images/onech.png")
  arrowI = loadImage("images/arrow.png")
}
function setup(){
  canvas = createCanvas(1300,640)


  player = createSprite(50,200,20,20)
  player.addImage(main)
  player.setCollider("rectangle",-170,0,30,350)
  player.scale=0.5;
  //groundstart
  still1 = createSprite(-300,300,1000,5)
  still2 = createSprite(360,300,120,5)
  still3 = createSprite(900,300,400,5)
  stand = createSprite(1200,350,70,20)
  stand.shapeColor="green"
stand2 = createSprite(1500,350,400,20)
stand2.shapeColor="red"
stand3 = createSprite(2000,350,400,20)
stand3.shapeColor="blue"

ground = createSprite(2000/2,600,3000,100)
ground.shapeColor="black"

stand.debug=true


  //groundsend
    //groupstart
  stillGroup = createGroup();
  enemyGroup = createGroup();
  standGR = createGroup();
  //groupsend
inv1 = createSprite(-300,200,60,500)
inv1.visible=false;
mo1=createSprite(540,400,120,20)
mo1.velocityY=-3
//
//enemy1=createSprite(200,200,20,20)

}
function draw(){
  background("pink")
  player.collide(inv1)
  player.collide(still1)
  player.collide(still2)
  player.collide(still3)
  player.collide(stand2)
  player.collide(stand3)
  player.collide(ground)
 // player.collide(standGR)
 // player.collide(still4)
 // player.displace(stand)
 standGR.add(stand)
 stand.collide(player)
 if(gameState==="play")
{if(keyWentDown("a")){
  if(count>0)
  {
  createArrow()
  count=count-1
}
}
stand.x=1200
textSize(40)
text("PALACE",2000,200)
if(player.x>2200){
  gameState = "end"
}
if(keyDown(RIGHT_ARROW)){
  player.x+=+10;

}
player.debug= true;

if(player.isTouching(mo1)&&mo1.velocityY===-3){
  player.y=mo1.y-100;
}
if(player.isTouching(mo1)&&mo1.velocityY===+3){
  player.y=mo1.y+-100;
  if(keyWentDown("space")&& player.y >= yes) {
    player.velocityY = -30;
  }
}
if(mo1.y>10&&mo1.y<40){
  mo1.velocityY=3
  console.log("true")
}
if(mo1.y>600&&mo1.y<640){
  mo1.velocityY=-3
  
}
if(player.isTouching(stand)){
  stand.velocityY=3
  player.velocityY=3;
}

camera.position.x=player.x;
text(count,200,50)
pos=player.y;
yes = player.y-80;
if(keyWentDown("space")&& player.y >= yes) {
  player.velocityY = -10;
}
if(keyDown(LEFT_ARROW)){
  player.x=player.x-10;
}
player.velocityY = player.velocityY + 0.8
//stillls{
if(player.isTouching(stillGroup)){
  player.velocityY=0
  if(keyWentDown("space")&& player.y >= yes) {
    player.velocityY = -10;
  }
}
stillGroup.add(still1)
stillGroup.add(still2)
stillGroup.add(still3)
//stillGroup.add(still4)


stillGroup.add(mo1)
//sttlls}
drawSprites()
if(keyWentUp("space")){
  player.velocityY=3
//player.velocityY=player.velocityY-1
//player.y=player.y+20
}}
if(gameState==="end"){
  textSize(100)
  text("YOU WON THE GAME",1800,400)
}

}

function createArrow() {
  if(count>0)
 { arrow= createSprite(player.x, player.y,20, 10);
  arrow.velocityX = 4;
  arrow.addImage(arrowI)
  arrow.scale = 0.1;
  arrow.lifetime=1300;
  return arrow;
}
}