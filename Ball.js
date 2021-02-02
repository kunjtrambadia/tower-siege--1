class Ball{
    constructor(x,y,radius){
        this.image = loadImage("polygon.png");

        var options = {
             'restitution':0.8,
             'friction':1.0,
             'density':1.0,
        }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body); 
  }
display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.radius,this.radius);
}
}
