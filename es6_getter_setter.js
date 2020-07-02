const _radius = new WeakMap();

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
}