class Snow{
    constructor(x,y) {
        var options = {density: 0.3, friction: 1}
        this.body = Bodies.circle(x,y,1,options)
        World.add(world, this.body)
        this.image = loadImage("snow4.webp")
    }
  display() {
      imageMode(CENTER)
      image(this.image, this.body.position.x, this.body.position.y, 15, 15)
  }  
  update() {
      if(this.body.position.y > height) {
          Matter.Body.setPosition(this.body, {x:random(0, 800),y:random(0,800)})
      }
  }
}
