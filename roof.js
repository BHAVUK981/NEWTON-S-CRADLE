class roof {

    constructor() {
    
    var options = {isStatic: true}
    
    this.roof = Bodies.rectangle(450,200,400,20,options)
    World.add(world, this.roof)
        
    
}
    display() {
    
    noStroke();
    fill("brown");
    rectMode(CENTER);
    rect(this.roof.position.x,this.roof.position.y,450,20);
    
    }
}