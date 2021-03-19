class Ground{

 constructor (x,y,width,height){

var options = {isStatic:true}
this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);


 }
 display(){
     var grd= this.body.position;
     fill("cyan");
     rect(grd.x,grd.y,this.width,this.height);

 }
    







}