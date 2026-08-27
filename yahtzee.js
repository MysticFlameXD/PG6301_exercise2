export function yahtzeeScore(scoreName, diceNumbers) {
  let total = 0;
  if (scoreName === "Chance") {
    diceNumbers.forEach((dice) => {
      total += dice;
    });
    return total;
  } else if (scoreName === "Ones") {
    diceNumbers.forEach((dice) => {
      if (dice === 1) {
        total += dice;
      }
    });
    return total;
  } else if (scoreName === "Twos") {
    diceNumbers.forEach((dice) => {
      if (dice === 2) {
        total += dice;
      }
    });
    return total;
  }
}
