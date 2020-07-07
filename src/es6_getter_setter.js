//Implementation details --> it is private to outside.
const _radius = new WeakMap();

// public interface. --> it is accessible from outside.
class Circle {
  constructor(radius) {
    _radius.set(this, radius);

  }

  // getter
  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) {
      throw new Error('invalid value');
    }
    else {
      _radius.set(this, value);
    }
  }

  draw() {
    console.log('drawing.....')
  }
}

const _Circle = Circle;
export { _Circle as Circle };