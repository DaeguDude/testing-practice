import { Calculator } from "./calculator";

test("add works well", () => {
  expect(Calculator.add(2, 2)).toBe(4);
  expect(Calculator.add(2, 2)).toBeGreaterThan(3);
  expect(Calculator.add(2, 2)).toBeLessThan(5);
  expect(Calculator.add(2, 2)).toBeGreaterThanOrEqual(4);
  expect(Calculator.add(2, 2)).toBeLessThanOrEqual(4);
  expect(Calculator.add(0, 100)).toBe(100);
  expect(Calculator.add(123, 123)).toBe(246);
  expect(Calculator.add(5, 0)).toBe(5);
  expect(Calculator.add(2, -2)).toBe(0);

  expect(Calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("subtract works well", () => {
  expect(Calculator.subtract(2, 2)).toBe(0);
  expect(Calculator.subtract(0, 100)).toBe(-100);
  expect(Calculator.subtract(123, 123)).toBe(0);
  expect(Calculator.subtract(5, 0)).toBe(5);
  expect(Calculator.subtract(2, 100)).toBe(-98);
  expect(Calculator.subtract(-2, 100)).toBe(-102);

  expect(Calculator.subtract(0.2, 0.1)).toBe(0.1);
  expect(Calculator.subtract(0.5, 0.21)).toBeCloseTo(0.29);
});

test("multiply works well", () => {
  expect(Calculator.multiply(2, 2)).toBe(4);
  expect(Calculator.multiply(0, 100)).toBe(0);
  expect(Calculator.multiply(1, 1)).toBe(1);
  expect(Calculator.multiply(1, -5)).toBe(-5);

  expect(Calculator.multiply(100, 0.01)).toBeCloseTo(1);
  expect(Calculator.multiply(0.2, 0.1)).toBeCloseTo(0.02);
  expect(Calculator.multiply(0.5, 0.5)).toBeCloseTo(0.25);
  expect(Calculator.multiply(-0.5, -0.5)).toBeCloseTo(0.25);
});

test("divide works well", () => {
  expect(Calculator.divide(2, 2)).toBe(1);
  expect(Calculator.divide(0, 100)).toBe(0);
  expect(Calculator.divide(0, -100)).toBe(-0);
  expect(Calculator.divide(123, 123)).toBe(1);
  expect(Calculator.divide(5, 0)).toBe(Infinity);
  expect(Calculator.divide(5, -0)).toBe(-Infinity);

  expect(Calculator.divide(-2, 100)).toBeCloseTo(-0.02);
  expect(Calculator.divide(2, 100)).toBeCloseTo(0.02);
  expect(Calculator.divide(0.2, 0.1)).toBeCloseTo(2);
  expect(Calculator.divide(0.5, 0.21)).toBeCloseTo(2.38);
});
