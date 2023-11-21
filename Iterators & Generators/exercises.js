var numbers = {
	*[Symbol.iterator]({
	  start= 1, 
	  stop = 100, 
	  step = 1
	} = {}) {
	  for( start; start <= stop; start += step ) {
		yield start
	  }
	}
  }
  
  for( let num of numbers) {
	console.log(num)
  }
  
  
  console.log(`My luck numbers are: ${[...numbers[Symbol.iterator]({start: 6, stop: 30, step: 4})]}`)
  