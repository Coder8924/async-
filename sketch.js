const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var sling;
var gameState = "onSling";
    
//string
var string = "This is my coding class";
console.log(string);

//number
var num = 150;
console.log(num);

//boolean
var bool = true;
console.log(bool);

//undefined
var object;
console.log(object);
//reassigning the same undefined object to null
//null
object = null;
console.log(object);

//An array holding same data types
var array1 = [1,2,3,4,5,6,7,8,9,10];
console.log(array1);
//An array holding different data types
var array2 = ["Arsh", 22, true];
console.log(array2);
//An array storing a list of arrays
var array3 = [[50,25,10,100],[10,20,30,40],[10,20]];
console.log(array3);
console.log(array3[0][1]);
array3.push("Arsh");
console.log(array3);

array3.pop();
console.log(array3);

function preload() {
    getBackgroundimg();

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    constrainedLog = new Log(230, 180,80, PI/2);
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    slingShot= new SlingShot(bird.body,{x:200,y:50});

   

function draw(){
   // console.log(bird.body.position.y,bird.body.position.x)
    background(backgroundImg);
    Engine.update(engine);
   /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();

    slingShot.display();

    
}
}

function mouseDragged() {
    if(gameState!=="launched") {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}

function mouseReleased() {
slingShot.fly();
gameState = "launched";
}

function keyPressed() {
    if(keyCode===32) {
       // bird.body.position.x = 200
        //bird.body.position.y = 50;
        slingShot.attach(bird.body);
    }
}
 /*async function getTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
}*/
async function getBackgroundimg() {
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    //console.log(hour);
    console.log(responseJSON);
    if (hour>=06) {
        bg = "bg1.png"}

        else {
            bg = "bg2.jpg";

        }
        backgroundimg = loadImage(bg);
        console.log(backgroundimg);
    }
