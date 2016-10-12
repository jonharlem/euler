// Each new term in the Fibonacci sequence is generated by 
// adding the previous two terms. By starting with 1 and 2, 
// the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose 
// values do not exceed four million, find the sum of the 
// even-valued terms.

function fibEven(x, y) {
	var sum = 0;
	var sumEven = y;
	while(sum < 4000000) {
		sum = x + y;
		x = y;
		y = sum;
		if(sum%2 === 0){
			sumEven = sumEven + sum;
		}
	} return sumEven;
}

console.log(fibEven(1, 2));