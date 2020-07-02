function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log(" Duplicating.... ");
}

function Circle(radius, color) {
  Shape.call(this, color);// --> super constructor.
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype); // --> Circle loses its constructor. It inherits from Shape.
Circle.prototype.constructor = Circle;

// Intermediate Function Inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Square() {

}

extend(Square, Shape);

// Method overriding --> Polymorphism.
Square.prototype.duplicate = function () {
  console.log("duplicating square in its constructor.");
}

Circle.prototype.duplicate = function () {
  console.log("duplicating circle in its constructor.");
}

// mixins
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log('eating');
  }
}

const canWalk = {
  walk: function () {
    console.log('walking');
  }
}

function Person() {

}

Object.assign(Person.prototype, canEat, canWalk);

