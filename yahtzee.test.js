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
test("scoring Threes add all threes", () => {
  expect(yahtzeeScore("Threes", [3, 3, 3, 3, 5])).toBe(12);
});
test("scoring Fours add all fours", () => {
  expect(yahtzeeScore("Fours", [4, 4, 2, 1, 5])).toBe(8);
});
test("scoring Fives add all fives", () => {
  expect(yahtzeeScore("Fives", [5, 5, 3, 3, 5])).toBe(15);
});
test("scoring Sixes add all sixes", () => {
  expect(yahtzeeScore("Sixes", [6, 6, 6, 6, 2])).toBe(24);
});
test("scoring Yahtzee checks if all values are identical", () => {
  expect(yahtzeeScore("Yahtzee", [2, 2, 2, 2, 2])).toBe(50);
});
