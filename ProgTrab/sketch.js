const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var angle;
var hoop,hoopImg;
var base,baseImg;
var trow,trowImg;
var botBas,ball;
var wallF,wallUp;
var groundL,groundR;
var rectangleL1,rectangleL2,rectangleR;
var ground,left,right,up;

function preload() {
hoopImg = loadImage("Imgs/Hoop.png");
baseImg = loadImage("Imgs/Base.png");
trowImg = loadImage("Imgs/Throw.png");
}

function setup() {
    createCanvas(500,300)
    engine = Engine.create();
    world = engine.world;

    angleMode(DEGREES);

    angle = -60

    var optStatic = {
        isStatic: true
    };

    rectangleL1 = Bodies.rectangle(300,195,75,12.5,optStatic)
    World.add(world,rectangleL1);

    rectangleL2 = Bodies.rectangle(300,240,75,12.5,optStatic)
    World.add(world,rectangleL2);

    rectangleR = Bodies.rectangle(406,215,75,12.5,optStatic)
    World.add(world,rectangleR);

    wallF = Bodies.rectangle(200,250,15,150,optStatic);
    World.add(world,wallF);

    wallUp = Bodies.rectangle(211,175,37.5,15,optStatic);
    World.add(world,wallUp);

    hoop = Bodies.rectangle(360,275,40,40,optStatic);
    World.add(world,hoop)

    botBas = new Trow(75,260,30,20,angle);
    ball = new BallBas(75,260);

    ground = new Walls(125,150,500,5);
    left = new Walls(0,75,5,300);
    right = new Walls(250,75,5,300);
    up = new Walls(125,0,500,5);
    
    Engine.update(engine);

}
function draw() {
    background(102,51,51);

    ground.walls();
    left.walls();
    right.walls();
    up.walls();

    botBas.display();

    ball.displayBall();

    push();
    fill("grey")
    rectMode(CENTER);
    rect(rectangleL1.position.x,rectangleL1.position.y,75,12.5)
    pop();

    push();
    fill("grey")
    rectMode(CENTER);
    rect(rectangleL2.position.x,rectangleL2.position.y,75,12.5)
    pop();

    push();
    fill("grey")
    rectMode(CENTER);
    rect(rectangleR.position.x,rectangleR.position.y,75,12.5)
    pop();
    
    push();
    fill("grey")
    rectMode(CENTER);
    rect(wallF.position.x,wallF.position.y,15,150)
    pop();

    push();
    imageMode(CENTER);
    image(hoopImg,360,275,40,40)
    pop();

    push();
    fill("grey")
    rectMode(CENTER);
    rect(wallUp.position.x,wallUp.position.y,37.5,15)
    pop();

    fill("#F2F2F2");
    textSize(25);
    text("Score: ", 415, 25);
    textAlign(CENTER, CENTER);

    leftKeyArrow();
    rightKeyArrow();
}

function leftKeyArrow(){
    if (keyIsDown(LEFT_ARROW)){
        rectangleL1.position.x -=2
        rectangleL2.position.x -=2
        rectangleR.position.x -=2
      }
}

function rightKeyArrow(){
    if (keyIsDown(RIGHT_ARROW)){
        rectangleL1.position.x +=2
        rectangleL2.position.x +=2
        rectangleR.position.x +=2
      }
}

//function keySpacePressed(){
//    if (KeyCode === SPACE){
//        var BallBas = new BallBas(trow.x,trow.y);
//        BallBas.trajectory = [];
//        Matter.Body.setAngle(BallBas.body, trow.angle);
//    }

function keyReleased(){
    if (keyCode === 32){
         ball.shootBall();
         console.log("Test")
       }
}