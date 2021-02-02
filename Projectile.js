class Projectile{
    constructor(A,B){

        var options = {
             bodyA:A,
             pointB:B,
             length:10,
        }
        this.pointB = this.pointB;
        this.body = constraint.create(options);
        World.add(world,this.body); 
  }
display(){
    if (this.body.bodyA) {
        ellipse(pos.x,pos.y,this.width,this.height);
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(1);
        stroke("grey");
    }
}
}
