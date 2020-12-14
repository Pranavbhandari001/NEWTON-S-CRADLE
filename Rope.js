class Ropen{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bird.body,
            bodyB:constrainedlog.body,
            stiffness:0.04,
            lenght:10
            
            
                   
    }
    
    this.chain=Constraint.create(options);
    World.add(world,chain);
    }
}