const prices = [20, 15, 30, 40, 55];
prices.forEach((price, idx) => {
  //  console.log(idx, price);
});

const newPrices = prices.map((price) => {
  return price * 1.1;
});
//console.log(newPrices);

const premiumPrices = newPrices.filter((prices) => {
  return prices > 30;
});
//console.log(premiumPrices);
console.log("New Prices:", newPrices);

const sumPrice = newPrices.reduce((prevVal, price) => {
  return prevVal + price;
});
console.log("sumPrice:", sumPrice);
