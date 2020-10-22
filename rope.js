class Rope{

    constructor(bodyA,pointB){
      
        var op={
            
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:2

        }
        this.pointB=pointB;

        this.rope= Constraint.create(op);
        World.add(world,this.rope);
     
    }

    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;

        strokeWeight(2);

        line(pointA.x,pointA.y,pointB.x,pointB.y);
         

    }
}