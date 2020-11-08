
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	stone1 = new stone(200,200,20,20);

	boy1 = new boy(400,300,200,40);

	mango1 = new mango(900,200,70);
	mango2 = new mango(300,400,70);
	mango3 = new mango(600,500,70);
	mango4 = new mango(800,500,70)

	tree1 = new tree(1100,300,400,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  stone1.display();

  boy1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  tree1.display();
}



