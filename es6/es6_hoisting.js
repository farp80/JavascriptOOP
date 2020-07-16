const hello = sayHello();

// Hoisting

// function declaration --> we call it before it is defined. (hoisted)
function sayHello() {

}

// function expression (no hoisted)
const sayHello = function () {

}

// class declaration and class expression are not hoisted (no raised to the top)

// class declaration
class Circles {

}

// class expression
const Cricles = class {

}