const countTotalSalary = function<T>(employees: T){
let total: number = 0;
for (const value of Object.values(employees)){
	total += value;
}
return total;
};

console.log(countTotalSalary({}));
console.log(countTotalSalary({mango: 100, poly: 150, alfred: 80,}));
console.log(countTotalSalary({kiwi: 200, lux: 50, chelsy: 150,}));