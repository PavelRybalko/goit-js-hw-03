const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
  let totalPrice = 0;
  for (const item of allProducts) {
    const keys = Object.keys(item);
    if (item[keys[0]] === productName) {
      totalPrice += item[keys[1]] * item[keys[2]];
    }
  }
  return totalPrice;
};

console.log(calculateTotalPrice(products, "Радар"));
console.log(calculateTotalPrice(products, "Дроид"));
