const Calculator = require("./calculator");

describe("Calculator", () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  it("sets to 10", () => {
    calculator.set(10);
    expect(calculator.value).toBe(10);
  });

  it("test clear", () => {
    calculator.set(10);
    calculator.clear(0);
    expect(calculator.value).toBe(0);
  });

  it("test add ", () => {
    calculator.set(5);
    calculator.add(10);
    expect(calculator.value).toBe(15);
  });
  it("test error ", () => {
    expect(() => {
      calculator.set(5);
      calculator.add(100);
    }).toThrow("100보다 큽니다.");
  });

  it("test divide 0", () => {
    calculator.set(5);
    calculator.divide(0);
    expect(calculator.value).toBe(Infinity);
  });
});
