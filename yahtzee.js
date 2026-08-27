export function yahtzeeScore(scoreName, diceNumbers) {
  if (scoreName === "Chance") {
    let total = 0;
    diceNumbers.forEach((dice) => {
      total += dice;
    });
    return total;
  }
}
