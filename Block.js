class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.5,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.image=loadImage("block.png");
      this.Visibility =255;
    }
    display(){
      
      
     if(this.body.speed<6){
      var pos= this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
     }
      else if(this.body.speed>3){
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-5;
       
        tint(255,this.Visibility);
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);

        pop();
      }
    }
}