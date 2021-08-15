const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,computerB,computerP,base;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerB = new ComputerB(500,random(450,height-300),180.150);
  base = new Base(300,random(450,height-300),180.150);
  computerP = new ComputerP(485,computerB.body.position.y-153,50,180);
  player = new Player(285,base.body.position.y-153,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerB.display();
   base.display();
   //display Player and computerplayer
   computerP.display();
   player.display();
}
