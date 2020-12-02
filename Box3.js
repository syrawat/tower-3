class Box3 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    this.Visiblity = 255;
     
    }
    display(){
      console.log(this.body.speed);
   if(this.body.speed < 15){
    var angle = this.body.angle; var pos= this.body.position; push(); translate(pos.x, pos.y); rotate(angle); rectMode(CENTER); rect(0,0,this.width, this.height); pop();

   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     pop();
   }
}

score(){
  if(this.Visiblity < 0 && this.Visiblity > -1005){
    score++;
  }
}
};
  