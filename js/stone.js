 class Stone{
     constructor(x,y){
        var options= {
          'restitution' : 0,
          'friction' : 1,
          'density' : 1.2 
        }
     this.stone = Bodies.circle(x,y,20,options);
     this.radius = 30;
     this.image = loadImage("images/stone.png");
     World.add(world, this.stone);

     }
      display(){
          var pos = this.stone.position;
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.radius,this.radius);
          
      }

 }