class Accumulator {
  constructor(startingValue) {
    this.value = startingValue;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
class CancelableAccumulator extends Accumulator {
  constructor(startingValue) {
    super(startingValue);
    this.startingValue = startingValue;
  }

  clear() {
    this.value = this.startingValue;
  }
}