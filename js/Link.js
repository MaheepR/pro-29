class Link{
    constructor(bodyA,bodyB){
        var lastLink=bodyA.body.bodies.length-2;
        this.link=Constraint.create({
            bodyA: bodyA.body.bodies[lastLink],
            pointA:{x:0,y:0},
            bodyB: bodyB.body,
            pointB:{x:0,y:0},
            length:80,
            stiffness:0
        });

        World.add(world,this.link);
    }
}