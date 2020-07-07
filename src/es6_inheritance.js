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
    super(color);
    super.move();
    this.radius = radius;
  }
  draw() {
    console.log('circle ....')
  }

  /**
  * method riding
  */
  move() {
    console.log('circle moving ...')
  }
}

const c = new Circle('red', 33);

