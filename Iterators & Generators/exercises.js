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
  


  // solved with next function attached to it 
  var numbers1 = {
	[Symbol.iterator]({
	  start = 1, 
	  stop = 100, 
	  step = 1
	} = {}) {
	  return {
		next: () => {
		  if (start <= stop) {
			const result = { done: false, value: start };
			start += step;
			return result;
		  } else {
			return { done: true, value: undefined };
		  }
		}
	  }
	}
  }
  
  var nums = numbers1[Symbol.iterator]({
	start: 12, 
	stop: 50, 
	step: 3
  })
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())
	console.log(nums.next())