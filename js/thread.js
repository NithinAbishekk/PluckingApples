class Thread{
     constructor(bodyA, pointB){
        var options= {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.02,
        length : 10
      }
     this.bodyA= bodyA;
     this.pointB = pointB;
     this.thread = Constraint.create(options);
     World.add(world, this.thread);

    }
    attach(body){
		this.thread.bodyA = body;
	}
    fly(){
        this.thread.bodyA = null;
    }

    display(){
        if(this.thread.bodyA){
            var posA = this.bodyA.position;
            var posB = this.pointB;
            stroke("yellow");
            strokeWeight(3);
            line(posA.x,posA.y,posB.x,posB.y);
        }
       
    }
     
     
}