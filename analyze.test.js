// takes an array of numbers and returns an object with the following properties:
// average, min, max, and length

import { analyze } from "./analyze";

describe("to check it has all 4 properties", () => {
  test("Check if it has all properties", () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual(
      expect.objectContaining({
        average: expect.any(Number),
        min: expect.any(Number),
        max: expect.any(Number),
        length: expect.any(Number),
      })
    );
  });

  test("Check if it has all same value", () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toMatchObject({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
