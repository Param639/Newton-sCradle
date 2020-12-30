
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var roof;
var bob;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof = new Roof(520,250,275,15);

	bob1 = new Bob(420,485,50);
	bob2 = new Bob(470,485,50);
	bob3 = new Bob(520,485,50);
	bob4 = new Bob(570,485,50);
	bob5 = new Bob(620,485,50);

	rope1 = new Rope(bob1.body,roof.body,-100,0);
	rope2 = new Rope(bob2.body,roof.body,-50,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,50,0);
	rope5 = new Rope(bob5.body,roof.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
	
	keyPressed();
}


function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:50,y:-50});
	}
}

