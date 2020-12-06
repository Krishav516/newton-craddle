
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

var roofObject;

var rope1, rope2, rope3, rope4, rope5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	bobDiameter = 40;

	roofObject = new Roof(400,120,230,20);

	bobObject1 = new Bob(320, 350, 40)
	bobObject2 = new Bob(360, 350, 40);
	bobObject3 = new Bob(400, 350, 40);
	bobObject4 = new Bob(440, 350, 40);
	bobObject5 = new Bob(480, 350, 40);
	
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 1)
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  
  drawSprites();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();
}

function keyPressed(){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:5000,y:0});
}
