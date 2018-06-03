const degToRad = deg => (deg / 180) * Math.PI
const radToDeg = rad => rad * 180 / Math.PI;

export default class Turtle {
  constructor(ctx) {
    this.ctx = ctx
    // Set initial orientation and position
    this.orientation = 0;
    this.position = {x: 0, y: 0}
  }

  // Make a cartesian cordinate system
  _centerCoords() {
    this.ctx.translate(this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
    this.ctx.transform(1, 0, 0, -1, 0, 0);
  }

  _clearContext() {
    this.ctx.save();
    this.ctx.setTransform(1,0,0,1,0,0);
    this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
    this.ctx.restore();
  }

  goto(x, y){
    this.position = { x, y }
  }

  fd(length) {
    // Ctx stuff
    this.ctx.save()
    this._centerCoords()
    this.ctx.beginPath()
    
    // Calculate new position
    const { x, y } = this.position
    const newX = x + Math.sin(this.orientation) * length
    const newY = y + Math.cos(this.orientation) * length

    // The thing
    this.ctx.moveTo(x,y) // Move the turtle to the current position
    this.ctx.lineTo(newX, newY)

    //Store new position
    this.position = {
      x: newX,
      y: newY,
    }
    this.ctx.stroke(); // Draw
    this.ctx.restore(); // Get old context mode
  }
  bk(length) {
    // Ctx stuff
    this.ctx.save()
    this._centerCoords()
    this.ctx.beginPath()
    
    // Calculate new position
    const { x, y } = this.position
    const newX = x + Math.sin(this.orientation + degToRad(180)) * length
    const newY = y + Math.cos(this.orientation + degToRad(180)) * length

    // The thing
    console.log(newX, newY)
    this.ctx.moveTo(x,y) // Move the turtle to the current position
    this.ctx.lineTo(newX, newY)

    //Store new position
    this.position = {
      x: newX,
      y: newY,
    }
    this.ctx.stroke(); // Draw
    this.ctx.restore(); // Get old context mode
  }
  rt(angle) {
    this.orientation += degToRad(angle)
  }
  lt(angle) {
    this.orientation -= degToRad(angle)
  }
}
