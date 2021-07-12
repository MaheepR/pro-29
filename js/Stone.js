class Stone{
    constructor(x,y,r){
        var opt={
            isStatic:false,
            
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r,opt);
        World.add(world,this.body);
    }
    show(){
        var pos=this.body.position;

       push ();
       noStroke();
       fill("white");
       ellipseMode(CENTER);
       ellipse(pos.x,pos.y,this.r,this.r);
       pop ();
    }
}