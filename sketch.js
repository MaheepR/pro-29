const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base;
var jointPoint;
var jointLink;
var bridge;
var stones=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base=new Base(1450,400,150,160);
  jointPoint=new Base(50,400,150,160);
  bridge=new Bridge(27,{x:1500,y:300});

  Matter.Composite.create(bridge.body,jointPoint);
  jointLink=new Link(bridge,jointPoint);

  for(var i=0; i<=8 ; i++){
    var x = random(width/2-200,width/2+300);
    var y = random(-10,140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
    
      }

}

function draw() {
  background(51);
  Engine.update(engine);

  base.show();
  jointPoint.show();
  bridge.show();

  for (var stone of stones) {
    stone.show();
    }
  

}
