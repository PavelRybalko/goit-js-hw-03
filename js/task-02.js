const countProbs = function (obj) {
  let total = 0;
  for (const object of Object.keys(obj)) {
    total += 1;
  }
  return total;
};

console.log(countProbs({}));
console.log(countProbs({ name: "Mango", age: 2 }));
console.log(countProbs({ mail: "poly@mail.com", isOnline: true, score: 500 }));
