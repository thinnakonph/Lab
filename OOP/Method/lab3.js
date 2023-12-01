let calculator = {
    read() {
      this.num1 = parseFloat(prompt("Enter the first number:"));
      this.num2 = parseFloat(prompt("Enter the second number:"));
    },
    sum() {
      return this.num1 + this.num2;
    },
    mul() {
      return this.num1 * this.num2;
    }
  };
  
  // ตัวอย่างการใช้งาน
  calculator.read();
  console.log(`Sum: ${calculator.sum()}`);
  console.log(`Multiplication: ${calculator.mul()}`);
  