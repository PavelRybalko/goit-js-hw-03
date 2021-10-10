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

const getAllPropValues = function (arr: Employees[], prop: string) {
  const result: (number | string)[] = [];

  for (const item of arr) {
    if (prop in item) {
      result.push(item[prop]);
    }
  }

  return result;
};

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, "category"));
