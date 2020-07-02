// factory function --> create an object
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('drawing..')
    }
  };
}

const circle = createCircle(2);
circle.draw();

//constructor Function --> create an object
function Circle(radius) {
  let defaultLocation = { x: 0, y: 1 };

  this.radius = radius;
  this.draw = function () {
    console.log("Draw..")
  }

  // To create a get property:
  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      //validations.
      defaultLocation = value;
    }
  })
}

const functionCircle = new Circle(2);
functionCircle.draw();
console.log(functionCircle.defaultLocation);
/**
 * 1. new creates an empty object.
 * 2. point this to this current object.
 */


// Creating a constructor function using the constructor built-in Function()

const CircleBuiltIn = new Function('radius', `
this.radius = radius;
  this.draw = function () {
    console.log("Built in Function..")
  }
`);

const builtin = new CircleBuiltIn(1);
builtin.draw();

CircleBuiltIn.call({}, 1);
CircleBuiltIn.apply({}, [1]);

//Adding properties|remove properties.
circle["area"] = "MO";
circle.city = "Gladstone";
delete circle["city"];

if ('radius' in circle) {
  console.log(" PROP Present");
}


