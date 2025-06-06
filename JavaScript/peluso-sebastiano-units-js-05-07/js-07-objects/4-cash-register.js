function cashRegister(cart) {
  let total = 0;
  for (let item in cart) {
    // Convert each price string to a float and add to total
    total += parseFloat(cart[item]);
  }
  // Round to two decimals to avoid floating point issues
  return Math.round(total * 100) / 100;
}

// Example usage:
let cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

console.log(cashRegister(cartForParty));  // 60.55
