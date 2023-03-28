function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

const user = {
name: 'Сергій',
age: 26,
sayHello() {
    console.log(`Привіт, я ${this.name}, мені ${this.age} років`);
}
};

const calculator = {
    num1: 0,
    num2: 0,
    ask() {
      this.num1 = Number(prompt('Введіть перше число: '));
      this.num2 = Number(prompt('Введіть друге число: '));
    },
    sum() {
      console.log(`Сума чисел: ${this.num1 + this.num2}`);
    },
    mul() {
      console.log(`Добуток чисел: ${this.num1 * this.num2}`);
    }
  };