class createDrop {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }

        this.rain = Bodies.circle(x,y,5,options);

        World.add(world,this.rain);
    }

    updateY(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
        }
    }

    showDrop(){
        push();
        translate(this.rain.position.x,this.rain.position.y);
        ellipseMode(CENTER);
        strokeWeight(3);
        stroke("black")
        fill("blue");
        ellipse(0,0,5);
        pop();
    }
}