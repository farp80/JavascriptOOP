function MyStopWatch() {
  let start = false;
  let stop = false;
  let duration = 0
  let startTime, stopTime = 0;

  this.startCounting = function () {
    if (start) {
      throw new Error(" The counting already started. You cannot start again. Press stop! ");
    }

    start = true;
    stop = false;
    startTime = new Date();
  }

  this.stopCounting = function () {
    if (!start) {
      throw new Error(" The counting already stopped!! ");
    }

    start = false;
    stop = true;
    stopTime = new Date();

    const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
    console.log(duration);
  }

  this.reset = function () {
    stopTime = null;
    startTime = null;
    start = false;
    stop = false;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    }
  })
}