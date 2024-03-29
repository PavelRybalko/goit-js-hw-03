interface Employees {
  name: string, 
  price: number, 
  quantity: number,
}

const products: Employees[] = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts:Employees[], productName: string) {
  for (const item of allProducts) {
    if (item.name === productName) {
      return item.price * item.quantity;
    }
  }
};

console.log(calculateTotalPrice(products, "Радар"));
console.log(calculateTotalPrice(products, "Дроид"));
