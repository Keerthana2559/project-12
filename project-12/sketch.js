var jaxon, jaxon_running, edges;
var path;
var invisibleLeftpath;
var invisibleRightpath;

function preload() {
  //loading animations
  jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png");

  obstacle1 = loadImage("bomb.png");
  obstacle2 = loadImage("coin.png");
  obstacle3 = loadImage("energyDrink.png");
  obstacle4 = loadImage("power.png");
}

function setup() {
  createCanvas(900, 800);

  //creating jaxon and adding animation
  jaxon = createSprite(700, 700, 20, 20);
  jaxon.addAnimation("running", jaxon_running);
  630;
  725;
  edges = createEdgeSprites();

  //creating path and adding animation
  path = createSprite(700, 900);
  path.addImage("path", pathImage);
  path.velocityY = 4;
  path.scale = 1.5;

  //creating invsiblePaths
  invisibleLeftpath = createSprite(430, 525, 20, 800);
  invisibleRightpath = createSprite(595, 620, 20, 20);
  invisibleLeftpath.visible = false;
  invisibleRightpath.visible = false;

  //adding scale and position to jaxon
  jaxon.scale = 0.1;
}

function draw() {
  background("white");

  //logging the x position of jaxon
  console.log(path.y);

  //making jaxon move with the mouse
  jaxon.x = World.mouseX;

  //making the background to reset
  if (path.y > 400) {
    path.y = height / 2;
  }

  //making jaxon to collide with invisible paths

  jaxon.collide(invisibleRightpath);
  jaxon.collide(invisibleLeftpath);

  path.depth = jaxon.depth;
  jaxon.depth = jaxon.depth + 1;

  drawSprites();
}
