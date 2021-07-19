const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stone1 = new Stone(600,400,50)
    iron = new Iron(800,200,50,50)
    rubber = new Rubber(400,400,23)

    stone2 = new Stone(650,350,60)
    iron2 = new Iron(850,250,60,60)
    rubber2 = new Rubber(450,450,33)


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    rubber.display();
    iron.display();
    stone2.display();
    rubber2.display();
    iron2.display();
    
 
}
