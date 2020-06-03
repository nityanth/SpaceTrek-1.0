var space_img;
var mars_img;
var spacecraft_img,spacecraft_img

function preload(){
  space_img = loadImage("space.jpg");
  mars_img = loadImage("mars.jpg");
  spacecraft_img = loadImage("spacecraft1.png");
  gif_earth = createImg("earth1.gif");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  mars = createSprite(300,500);
  mars.addImage(mars_img);
  gif_earth.position(800,50);
  spacecraft= createSprite(800,100);
  spacecraft.addImage(spacecraft_img);
  spacecraft.scale = 0.5;
}

function draw() {
  background(space_img);
  spacecraft.x=mouseX;
  spacecraft.y=mouseY;

  drawSprites();
}