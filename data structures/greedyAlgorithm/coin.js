function greedyCoinChange(coins, amount) {
    coins.sort((a, b) => b - a); // Sort the coin denominations in descending order
    const change = [];
    let remainingAmount = amount;
  
    for (let coin of coins) {
      while (remainingAmount >= coin) {
        change.push(coin);
        remainingAmount -= coin;
      }
    }
  
    if (remainingAmount === 0) {
      return change;
    } else {
      return "Change cannot be made with the given denominations.";
    }
  }
  
  // Example usage:
  const coinDenominations = [25, 10, 5, 1]; // Quarters, Dimes, Nickels, Pennies
  const amount = 63; // Amount in cents
  
  const change = greedyCoinChange(coinDenominations, amount);
  console.log("Change:", change);
  