class ground {
    constructor(x,y,width,height){

        this.body=Bodies.rectangle(x, y, 400, 20);
        this.width=width;
        this.height=height;
        this.image=loadImage("download (1).png");
        World.add(world,this.body);
    }
        display(){
            rectMode(CENTER);
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
       
        }
    
}
