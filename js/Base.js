class Base{
    constructor(x,y,w,h){
        var opt={
            isStatic:true
        };
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body);
    }
    show(){
        var pos=this.body.position;

        push();
        noStroke();
        fill('#947867' );
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}