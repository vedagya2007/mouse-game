class Cheese{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10,options);
        this.image=loadImage("cheese.png")
        World.add(world,this.body);
        
    }

    display(){
        if(mouse.isTouching(this.body)){
            World.remove(world,this.body)
        }else{
       
        ellipseMode(RADIUS)
        imageMode(CENTER)
        //ellipse(this.body.position.x,this.body.position.y,20,20)
        image(this.image,this.body.position.x,this.body.position.y,100,100);
    }
}
}