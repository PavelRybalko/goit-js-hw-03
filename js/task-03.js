const findBestEmployee = function(employees){

let bestEmployeeScore = 0;
let bestEmployeeName;
for(let employee of Object.entries(employees)){
	const [name,score] = employee;
	if(bestEmployeeScore<score){
		bestEmployeeScore = score;
		bestEmployeeName = name; 
	}
}
return bestEmployeeName;
};

console.log(findBestEmployee({ann: 29, david: 35, helen: 1, lorence: 99,}));
console.log(findBestEmployee({poly: 12, mango:17, ajax: 4,}));
console.log(findBestEmployee({lux: 147, david:21, kiwi: 19, chelsy: 38,}));