import { test, expect } from "vitest";
import { yahtzeeScore } from "./yahtzee";

test("scoring Chance add all dice", () => {
  expect(yahtzeeScore("Chance", [1, 2, 3, 4, 5])).toBe(1 + 2 + 3 + 4 + 5);
});
test("scoring Ones add all ones", () => {
  expect(yahtzeeScore("Ones", [1, 1, 1, 4, 5])).toBe(3);
});
test("scoring Twos add all twos", () => {
  expect(yahtzeeScore("Twos", [1, 2, 2, 2, 2])).toBe(8);
});
