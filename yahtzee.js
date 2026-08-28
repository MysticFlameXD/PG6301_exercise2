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
  } else if (scoreName === "Threes") {
    let total = 0;
    diceNumbers.forEach((dice) => {
      if (dice === 3) {
        total += dice;
      }
    });
    return total;
  } else if (scoreName === "One Pair") {
    let sortedDiceNumbers = diceNumbers.toSorted();
    for (let i = 0; i < sortedDiceNumbers.length - 1; i++) {
      if (sortedDiceNumbers[i] === sortedDiceNumbers[i + 1]) {
        return sortedDiceNumbers[i] * 2;
      }
    }
    return 0;
  }
}
