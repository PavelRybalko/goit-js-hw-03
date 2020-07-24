const countProbs = function(obj){
	return Object.keys(obj).length;
}

console.log(countProbs({}));
console.log(countProbs({ name : 'Mango', age : 2}));
console.log(countProbs({ mail : 'poly@mail.com', isOnline: true, score: 500}));