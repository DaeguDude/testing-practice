import { caesar } from "./caesar";

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!

test("caesar cipher", () => {
  expect(caesar("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", 23)).toBe(
    "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD"
  );
  expect(caesar("z", 1)).toBe("a");
  expect(caesar("aBc", 27)).toBe("bCd");
  expect(caesar("abc!", 1)).toBe("bcd!");

  // I need to pass this test case
  expect(caesar("a", -1)).toBe("z");
  expect(caesar("a!", -1)).toBe("z!");
});
