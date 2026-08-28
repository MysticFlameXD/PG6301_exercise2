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
test("scoring One Pair add a pair of 2s", () => {
  expect(yahtzeeScore("One Pair", [1, 2, 2, 3, 4])).toBe(4);
});
test("scoring One Pair add a pair of 5s", () => {
  expect(yahtzeeScore("One Pair", [1, 3, 4, 5, 5])).toBe(10);
});
test("scoring One Pair with no pair", () => {
  expect(yahtzeeScore("One Pair", [1, 3, 4, 2, 5])).toBe(0);
});
