class Circle {
  constructor(radius) {
    this.radius = radius;
    // drawing will be in the object Circle.
    this.drawing = function () {
      console.log(" drawing right now...");
    }
  }

  // draw will be in the prototype
  draw() {
    console.log(" Drawing circle ....");
  }
}

const circle = new Circle(10);


/**
 * private methods using symbols
*/
const _radius = Symbol()
const _draw = Symbol()

class Sphere {
  constructor(radius) {
    this[_radius] = radius
  }

  // computed property names ES6 --> it generates an unique UUID, it is used as the name of the method.
  [_draw]() {

  }
}

/***
 * private methods using weakmaps
 */
const _radius3 = new WeakMap();
const _move = new WeakMap()

class Spheres {
  constructor(radius) {
    _radius3.set(this, radius);
    // with this approach this is set to undefined as part of the global object.
    _move.set(this, function () {
      console.log('moving .... ')
    });

    // to fix it: arrow function: it belongs to the class constructor.
    _move.set(this, () => {
      console.log(";;; array function")
    })
  }

  // computed property names ES6 --> it generates an unique UUID, it is used as the name of the method.
  // property
  draw() {
    _radius3.get(this);
    _move.get(this)();
  }
}

