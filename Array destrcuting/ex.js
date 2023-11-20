var arr = [1, 2];
var [first, second] = arr;
[second, first] = [first, second]

console.log(first, second)

var numbers = [10, 20, 30, 40, 50];

var [
  ,
  first, 
  , 
  third
] = numbers;

console.log(first, third)

const person = { name: 'John', age: 23} ;

var [name, age] = Object.values(person)
var {name, age} = person

console.log(name, age)


const coordinated = [3, 6, [8, 9, 20]]

var [
  , 
  , 
  [
    first1, 
    second1,
    third1
  ]
] = coordinated

var [x, y, [z, o, p]] = coordinated

console.log(z)


// Use array destructuring to create two variables: 'first' and 'rest' from the array.
const colors = ['red', 'green', 'blue', 'yellow'];

var [
  first, 
  ...rest
] = colors

console.log(first, rest)


// Use array destructuring to swap the values of 'a' and 'b' without using a temporary variable.
let a = 5;
let b = 10;

[a, b] = [b, a]

console.log(a, b)


// Use array destructuring to extract the 'title' property from the book object.
const book = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 };

var [
  title
] = Object.values(book) || []

console.log(title)


// Extract the second element of the array and assign it to a variable called 'second'.
const fruits = ['apple', 'banana', 'orange', 'grape'];

var [
  , 
  second, 
  
] = fruits

console.log(second)


// Use array destructuring to create variables 'width' and 'height' from the rectangle object.
const rectangle = { width: 20, height: 30 };

var [
  width, 
  height,
] = Object.values(rectangle);

console.log(width, height);

// Swap the values of 'x' and 'y' in the 'point' object using array destructuring.
const point = { x: 10, y: 20 };
var {x : tmpX, y : tmpY} = point
var {x, y} = {x: tmpY, y: tmpX }
console.log(x, y)
