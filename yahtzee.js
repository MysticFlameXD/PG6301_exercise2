export function yahtzeeScore(scoreName, diceNumbers) {
  if (scoreName === "Chance") {
    let total = 0;
    diceNumbers.forEach((dice) => {
      total += dice;
    });
    return total;
  } else if (scoreName === "Ones") {
    let total = 0;
    diceNumbers.forEach((dice) => {
      if (dice === 1){
        total+= dice;
      }
    });
    return total;
  }
}
