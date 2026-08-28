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
    diceNumbers.forEach((dice) => {
      if (dice === 3) {
        total += dice;
      }
    });
    return total;
  } else if (scoreName === "Fours") {
    diceNumbers.forEach((dice) => {
      if (dice === 4) {
        total += dice;
      }
    });
    return total;
  } else if (scoreName === "Fives") {
    diceNumbers.forEach((dice) => {
      if (dice === 5) {
        total += dice;
      }
    });
    return total;
  } else if (scoreName === "Sixes") {
    diceNumbers.forEach((dice) => {
      if (dice === 6) {
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
  } else if (scoreName === "Yahtzee") {
    for (let i = 0; i < diceNumbers.length - 1; i++) {
      if (diceNumbers[i] === diceNumbers[i + 1]) {
        total = 50;
      } else {
        return 0;
      }
    }
    return total;
  }
}
