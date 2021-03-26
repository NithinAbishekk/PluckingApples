const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj,groundObject,spring;
var apple1,apple2,apple3,apple4,apple5,apple6,apple7,apple8,apple9,apple10,apple11,apple12;
var world,boy;
var backgroundIMG;

function preload(){
	boy = loadImage("images/boy.png");
	backgroundIMG = loadImage("images/background.png");
  }

function setup() {
	createCanvas(1300, 500);
	engine = Engine.create();
	world = engine.world;

	apple1 = new apple(1100,100);
	apple2 = new apple(1050,105);
	apple3 = new apple(1150,199);
	apple4 = new apple(1100,130);
	apple5 = new apple(1000,180);
	apple6 = new apple(900,150);
	apple7 = new apple(920,155);
	apple8 = new apple(920,205);
	apple9 = new apple(1240,160);


	treeObj=new tree(1050,500);
	groundObject=new ground(width/2,499,width,20);
	stoneObj=new Stone(500,250);

	spring = new Thread(stoneObj.stone,{x:393,y:310});
	
	/* var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
		
		Engine.run(engine);
		Render.run(render); */
	Engine.run(engine);

}

function draw() {

  background(0);
  //Add code for displaying text here!
  image(boy ,200,180,300,360);
  

  treeObj.display();

  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();
  apple6.display();
  apple7.display();
  apple8.display();
  apple9.display();

  stoneObj.display();

  spring.display();

  groundObject.display();

  detectCollision(stoneObj,apple1);
  detectCollision(stoneObj,apple2);
  detectCollision(stoneObj,apple3);
  detectCollision(stoneObj,apple4);
  detectCollision(stoneObj,apple5);
  detectCollision(stoneObj,apple6);
  detectCollision(stoneObj,apple7);
  detectCollision(stoneObj,apple8);
  detectCollision(stoneObj,apple9);
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.stone,{x: mouseX,y: mouseY})
}

function mouseReleased(){
	spring.fly()
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.stone, {x:500, y:250}) 
	  spring.attach(stoneObj.stone);
	}
  }


function detectCollision(lstone,lapple){

	appleBodyPosition=lapple.body.position;
	stoneBodyPosition=lstone.stone.position;
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, appleBodyPosition.x, appleBodyPosition.y);
	  
	 //console.log(distance)
	//console.log(lapple.r+lstone.r)
	if(distance<=lapple.r+lstone.radius)
	  {
		//console.log(distance);
		  Matter.Body.setStatic(lapple.body,false);
	  }
  
	}