const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);
  let bestEmploy = entries[0];
  for (let i = 0; i < entries.length; i += 1) {
    if (entries[i][1] > bestEmploy[1]) {
      bestEmploy = entries[i];
    }
  }
  return bestEmploy[0];
};

console.log(findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }));
console.log(findBestEmployee({ poly: 12, mango: 17, ajax: 4 }));
console.log(findBestEmployee({ lux: 147, david: 21, kiwi: 19, chelsy: 38 }));
