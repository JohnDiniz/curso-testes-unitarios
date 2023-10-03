import calculator from "calculator";

describe("calculator tests", () => {
  it("should sum two numbers", async () => {
    const sum = calculator.sum(2, 2);
    expect(sum).toBe(4);
  });
  it("should subtract two numbers", async () => {
    const sub = calculator.sub(2, 2);
    expect(sub).toBe(0);
  });
  it("should divide two numbers", async () => {
    const div = calculator.div(2, 2);
    expect(div).toBe(1);
  });
  it("should multiply two numbers", async () => {
    const mul = calculator.mul(2, 2);
    expect(mul).toBe(4);
  });
});
