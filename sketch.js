const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, bgimg, snow, maxsnow = 100, snowfall = []
function preload() {
bgimg = loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,800);
  engine = Engine.create()
  world = engine.world
  if(frameCount%100 === 0) {
    for(var i = 0; i < maxsnow; i++) {
      snowfall.push(new Snow(random(0, 800), random(0, 800)))
    }
  }
}

function draw() {
  background(bgimg); 
  Engine.update(engine); 
  drawSprites();
  for(var i = 0; i < maxsnow; i++) {
    snowfall[i].display()
    snowfall[i].update()
  }
}