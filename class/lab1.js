class Calculator {
    constructor(initialValue = 0) {
      this.value = initialValue;
    }
    add(number) {
      this.value += number;
    }
    subtract(number) {
      this.value -= number;
    }
    multiply(number) {
      this.value *= number;
    }
    divide(number) {
      if (number !== 0) {
        this.value /= number;
      } else {
        alert("Cannot divide by zero!");
      }
    }
    show() {
      alert(`Current value: ${this.value}`);
    }
  }
  // Example usage:
  const calculator = new Calculator(10);
  calculator.add(5);
  calculator.show();
  calculator.subtract(3);
  calculator.show();
  calculator.multiply(2);
  calculator.show();
  calculator.divide(4);
  calculator.show();
  