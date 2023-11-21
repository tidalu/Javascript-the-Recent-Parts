console.clear()

function *evenNumbersIterator(n) {
  for(let i = 2; i <= n; i+=2) {
    yield i
  }
}

const evenIterator = evenNumbersIterator(8);
console.log([...evenIterator]); // Expected: [2, 4, 6, 8]


function *countdownGenerator(n) {
  for(let i = n; i >= 1; i--) {
    yield i
  }
}

const countdown = countdownGenerator(5);
console.log([...countdown]); // Expected: [5, 4, 3, 2, 1]


function *fibbonacciGenerator(n) {
  var first = 0; 
  var second = 1;
  for(let i = 0; i < n ; i++ ) {
    yield first;
    var tmp = first 
    first = second;
    second  = tmp + second 
  }
}

const fibonacci = fibbonacciGenerator(16);
console.log([...fibonacci]); // Expected: [0, 1, 1, 2, 3]



function *vowelIterator(str) {
  for(let i = 0; i < str.length; i++) {
    str.charAt(i).match(/[aeiou]/gi) ? yield str.charAt(i) : ""
  }
}


const vowelsIterable = vowelIterator('Hello World');
console.log([...vowelsIterable]); // Expected: ['e', 'o', 'o']
