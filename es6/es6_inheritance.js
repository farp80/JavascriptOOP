class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color); // --> it extends Shape constructor.
    super.move(); // it allows to see the fShape's move implementation.
    this.radius = radius;
  }
  draw() {
    console.log('circle ....')
  }

  /**
  * method riding --> it overrides Shape's implementation
  */
  move() {
    console.log('circle moving ...')
  }
}

const c = new Circle('red', 33);
c.draw();
c.move();

