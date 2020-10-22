class Bob{
    constructor(x){
        var op={
         isStatic:true,
         restitution:0.3,
         friction:0.5,
         density:1.2

        }
        
        
        this.body= Bodies.circle(x,350,20,op);
        this.radius=20;
        this.x=x;
        this.y=350;
        World.add(world,this.body);

    }

    display(){
     
     fill("blue");
     ellipseMode(RADIUS);
     circle(this.body.position.x,this.body.position.y,20);
     
    }

}