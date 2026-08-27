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
  } else if (scoreName === "Fours") {
    let total = 0;
    diceNumbers.forEach((dice) => {
      if (dice === 4) {
        total += dice;
      }
    });
    return total;
  } else if (scoreName === "Fives") {
    let total = 0;
    diceNumbers.forEach((dice) => {
      if (dice === 5) {
        total += dice;
      }
    });
    return total;
  } else if (scoreName === "Sixes") {
    let total = 0;
    diceNumbers.forEach((dice) => {
      if (dice === 6) {
        total += dice;
      }
    });
    return total;
  }
}
