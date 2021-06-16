var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
appleImg = loadImage("apple.jpg")
leafImg = loadImage("leaf.jpg")}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}
function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select=Math.round(random (1,2))
  if (frameCount%80===0) {
   if (select===1) {
     createApples();
   }else if (select==2){
     createleaves();
     
  }
  };
  drawSprites();
}
function createApples() {
  apple=createSprite(random(50,350),0)
apple.addImage(appleImg)
apple.scale=0.03
apple.velocityY = 2
}function createleaves() {
  leaf=createSprite(random(50,350),0)
leaf.addImage(leafImg)
leaf.scale=0.03
leaf.velocityY = 2
}