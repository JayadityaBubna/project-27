
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,150);

	bobObject1=new Bob(400);
	bobObject2=new Bob(440);
	bobObject3=new Bob(480);
	bobObject4=new Bob(360);
	bobObject5=new Bob(320);

	rope1=new Rope(bobObject1.body,{x:400,y:150});
	rope2=new Rope(bobObject2.body,{x:440,y:150});																			
	rope3=new Rope(bobObject3.body,{x:480,y:150});
	rope4=new Rope(bobObject4.body,{x:360,y:150});
	rope5=new Rope(bobObject5.body,{x:320,y:150});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:-1000})
	}
}



