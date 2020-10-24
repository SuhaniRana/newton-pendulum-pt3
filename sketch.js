
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob(150,500,100,100);
	bobObject2 = new bob(250,500,100,100);
	bobObject3 = new bob(350,500,100,100);
	bobObject4 = new bob(450,500,100,100);
	bobObject5 = new bob(550,500,100,100);

	roofObject = new roof(350,100,500,50);

	rope1 = new rope(bobObject1.body, roofObject.body, bobDiameter'2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  
  drawSprites();
 
}



