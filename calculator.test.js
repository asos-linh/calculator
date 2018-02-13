const Calculator = require("./calculator");

describe("String calculator", () => {
  test("returns 0 when given an empty string", () => {
    const calculator = new Calculator();
    expect(calculator.add("")).toBe(0);
  });
  test("returns number 1 when given string '1'", () => {
    const calculator = new Calculator();
    expect(calculator.add("1")).toBe(1);
  });
  test("returns number 5 when given string '5'", () => {
    const calculator = new Calculator();
    expect(calculator.add("5")).toBe(5);
  });
  test("returns the sum of '2' and '5'", () => {
    const calculator = new Calculator();
    expect(calculator.add("2,5")).toBe(7);
  });
  test("returns the sum of '9' and '1'", () => {
    const calculator = new Calculator();
    expect(calculator.add("9,1")).toBe(10);
  });
  test("returns the sum of '4' and '8'", () => {
    const calculator = new Calculator();
    expect(calculator.add("4,8")).toBe(12);
  });
  test("returns the sum of '1', '2' and '3'", () => {
    const calculator = new Calculator();
    expect(calculator.add("1,2,3")).toBe(6);
  });
  test("returns the sum of '1', '2', '3' and '4'", () => {
    const calculator = new Calculator();
    expect(calculator.add("1,2,3,4")).toBe(10);
  });
  test("returns the sum of '1', '2', '3', '4', '9', '7', '5' and '3'", () => {
    const calculator = new Calculator();
    expect(calculator.add("1,2,3,4,9,7,5,3")).toBe(34);
  });
  // test("returns the number 1 if the string '1\n' is entered", () => {
  //   const calculator = new Calculator();
  //   expect(calculator.add("1\n")).toBe(1);
  // });
  test("returns the number 3 if the string '1\n2' is entered", () => {
    const calculator = new Calculator();
    expect(calculator.add("1\n2")).toBe(3);
  });
});
