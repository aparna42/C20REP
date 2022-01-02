

//Namespacing 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;



     var ground_options = {
       isStatic: true
     };


  //creating a rectangular ground body
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
    World.add(world,ground);



    rectMode(CENTER);

}


function draw() {
  background(51);
    Engine.update(engine);


    rect(ground.position.x,ground.position.y,400,20);

}

