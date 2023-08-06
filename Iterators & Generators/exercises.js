var numbers = {
	*[Symbol.iterator]({
		start = 0, 
		stop = 100, 
		step = 1
	} = {}) {
		for( let v = start; v <= stop; v+=step) {
			yield v;
		}
	}
};

// should print 0..100 by 1s
for (let num of numbers) {
	// console.log(num);
}

// should print 6..30 by 4s
console.log("My lucky numbers are: ____");

// Hint:
    console.log([...numbers[Symbol.iterator]( {start: 6, stop: 30, step: 4} )])
