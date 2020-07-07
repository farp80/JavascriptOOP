let _values = new WeakMap();

class Stack {
  constructor() {
    _values.set(this, []);
  }

  pop() {
    if (_values.get(this).length == 0) {
      throw new Error('Stack is empty');
    }
    return _values.get(this)[_values.get(this).length - 1]
  }

  peek() {
    if (_values.get(this).length == 0) {
      throw new Error('Stack is empty');
    }

    return _values.get(this).pop();
  }

  push(value) {
    _values.get(this).push(value);
    this.count++;
  }

  get count() {
    return _values.get(this).length;
  }
}