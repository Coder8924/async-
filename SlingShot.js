class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body) {
        this.sling.bodyA = body;
      }
    fly() {
        this.sling.bodyA = null;
    }
    display() {
    image(this.sling1,200,20);
    image(this.sling2,170,20);
    if(this.sling.bodyA){ 
    var posA = this.sling.bodyA.position;
    var posB = this.pointB;
    push();
    stroke(48,22,8);
    if(posA.x<220) {
        strokeWeight(7);
        line(posA.x-20 ,posA.y, posB.x-10, posB.y);
        line(posA.x-20,posA.y,posB.x+30,posB.y-3);
        image(this.sling3,posA.x-30,posA.y-10,15,30);
    }
    else{
        strokeWeight(3);
        line(posA.x+25,posA.y,posB.x-10,posB.y);
        line(posA.x+25,posA.y,posB.x+30,posB.y);
        image(this.sling3,posA.x+25,posA.y-10,15,30);
    }
    pop();
    }
 }

}
