/**
 *  Prototypes(parent) --> it is just a regular object.
 *  and Prototypical */

let person = { name: 'Mosh' };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log(descriptor);
console.log(Object.getPrototypeOf(person));

function Circle(radius) {
  // Instance members
  this.radius = radius;
}

// Prototype members
Circle.prototype.draw = function () {
  console.log('Draw');
}

Circle.prototype.toString = function () {
  return `How to get this radius: ${this.radius}`;
}

// Objects.keys(obj) --> it just returns instance members.
// for (let key in obj) --> it returns prototype and instance members.

/***
 * StopWatch using prototypes
 * Its biggest drawback is that all the properties are available to the public. There is not abstraction.
 */

function StopWatch() {
  let start = false;
  let stop = false;
  let duration = 0
  let startTime, stopTime = 0;

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    }
  });

  Object.defineProperty(this, 'start', {
    get: function () {
      return start;
    }
  });

  Object.defineProperty(this, 'startTime', {
    get: function () {
      return startTime;
    }
  });

  Object.defineProperty(this, 'stopTime', {
    get: function () {
      return stopTime;
    }
  });
}

StopWatch.prototype.start = function () {
  if (this.start) {
    throw new Error(" The counting already started. You cannot start again. Press stop! ");
  }

  this.start = true;
  this.startTime = new Date();
}

StopWatch.prototype.stop = function () {
  if (!this.start) {
    throw new Error(" The counting already stopped!! ");
  }

  this.start = false;
  this.stopTime = new Date();

  const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
  duration += seconds;
}

StopWatch.prototype.reset = function () {
  this.stopTime = null;
  this.startTime = null;
  this.start = false;
  duration = 0;
}