import { capitalizeFirstLetter } from "./capitalize";

test("capitalize first letter", () => {
  expect(capitalizeFirstLetter("sanghak")).toBe("Sanghak");
  expect(capitalizeFirstLetter("sanghak")).not.toBe("sanghak");

  expect(capitalizeFirstLetter("jake")).toBe("Jake");
  expect(capitalizeFirstLetter("jake")).not.toBe("jake");

  expect(capitalizeFirstLetter("jake Gyllenhaal")).toBe("Jake Gyllenhaal");
  expect(capitalizeFirstLetter("jake Gyllenhaal")).not.toBe("jake Gyllenhaal");
});
