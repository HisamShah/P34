class Superhero{
    constructor(x,y,r){
        var options={
            density: 1,
            frictionAir: 1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("Superhero-01.png");
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,500,200);
        pop();
    }
}