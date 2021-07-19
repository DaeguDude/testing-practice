import { reverseString } from "./reverseString";

test("successfully reverses string", () => {
  expect(reverseString("asdf")).toBe("fdsa");
  expect(reverseString("sanghak")).toBe("kahgnas");
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("Howdy")).toBe("ydwoH");
});

test("it can also reverses string with space", () => {
  expect(reverseString("Hello World!")).toBe("!dlroW olleH");
  expect(reverseString("What is your name?")).toBe("?eman ruoy si tahW");
});
