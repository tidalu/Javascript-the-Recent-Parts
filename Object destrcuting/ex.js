// Destructure the 'person' object to create variables 'name' and 'age'.
const person = { name: 'John', age: 30 };

var age, name
({
  name, 
  age
} = person || {})

console.log(name, age)


// Destructure the 'car' object to create variables 'make', 'model', and 'year'.
const car = { make: 'Toyota', model: 'Camry', year: 2022 };

var make, model, year;

({
  make, 
  model, 
  year = "Not Given"
} = car || {})


console.log(make, model, year)



// Destructure the 'rectangle' object to create variables 'width' and 'height'.
const rectangle = { width: 10, height: 20 };

var {
  width: w = NaN, 
  height: h = NaN
} = rectangle || {}

console.log(w, h)


// Swap the values of 'x' and 'y' in the 'point' object using object destructuring.
const point = { x: 5, y: 10 };

var {
  x: first, 
  y : second
} = point || {}; // do not forget the semicolon

({ x: first, y: second} = { x : second, y: first})

console.log(first, second)

// Destructure the 'book' object to create variables 'title' and 'author'.
const book = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 };


var {
  title, 
  author
} = book



// Destructure the 'user' object to create variables 'username', 'email', and 'isAdmin'.
const user = { username: 'jsmith', email: 'jsmith@example.com', isAdmin: false };

var {
  username, 
  email, 
  isAdmin
} = user


// Extract the 'name' property from the nested 'info' object.
const person1 = { info: { name: 'Alice', age: 25 } };

var {
  info : {
    name : isName
  }
} = person1


// Destructure the 'data' object to create variables 'name', 'city', and 'country'.
const data = { name: 'John', address: { city: 'New York', country: 'USA' } };

var {
  name : name, 
  address : {
    city, 
    country
  }
} = data


// Destructure the 'employee' object to create variables 'id', 'name', and 'position'.
const employee = { id: 101, name: 'Jane Doe', position: 'Software Engineer', department: 'Engineering' };


var {
  id, 
  name, 
  position
} = employee


// Create a function 'getFullName' that accepts a person object and returns their full name.
const person3 = { firstName: 'John', lastName: 'Doe' };


function getFullName({firstName, lastName} = {}) {
  return `${firstName} ${lastName}`
}

console.log(getFullName(person3))



// Given two arrays 'users' and 'profiles', combine them to create a new array 'combined'.
// Each object in 'combined' should have the properties 'id', 'username', 'email', and 'avatar'.
// If a property is missing in an object, use default values: 'Unknown' for 'username' and 'email',
// and a default avatar URL for 'avatar'.

const users = [
  { id: 1, username: 'jsmith', email: 'jsmith@example.com' },
  { id: 2, username: 'alice', email: 'alice@example.com', avatar: 'alice-avatar.jpg' },
  { id: 3, email: 'bob@example.com', avatar: 'bob-avatar.jpg' }
];

const profiles = [
  { id: 1, avatar: 'jsmith-avatar.jpg' },
  { id: 2, username: 'alice', avatar: 'alice-profile.jpg' },
  { id: 4, username: 'newuser', email: 'newuser@example.com' }
];

// Your task is to create a new array 'combined' by combining 'users' and 'profiles'.
// Each object in 'combined' should have the properties 'id', 'username', 'email', and 'avatar'.
// Use default values where necessary.

// Output the final 'combined' array.

// Your code here...

var combined = [
  ...users, 
  ...profiles
]

// console.log(combined)

var defaultValues = {
  id : 'unknown', 
  username: "unknown", 
  avatar: 'avatar'
};

var result = combined.map(({id, username, email, avatar}) => ({
  id: id || defaultValues.id, 
  username: username ||  defaultValues.username, 
  avatar: avatar ||  defaultValues.avatar
}));

console.log(result)


// Given two arrays 'employees' and 'salaries', combine them to create a new array 'combined'.
// Each object in 'combined' should have the properties 'id', 'name', 'position', and 'salary'.
// If a property is missing in an object, use default values: 'Unknown' for 'name' and 'position',
// and a default salary of 0 for 'salary'.

const employees = [
  { id: 1, name: 'John Doe', position: 'Engineer' },
  { id: 2, name: 'Alice Smith', position: 'Manager', salary: 60000 },
  { id: 3, position: 'Designer', salary: 45000 }
];

const salaries = [
  { id: 1, salary: 70000 },
  { id: 2, name: 'Alice Smith', position: 'Manager' },
  { id: 4, name: 'New Employee', salary: 55000 }
];

// Your task is to create a new array 'combined' by combining 'employees' and 'salaries'.
// Each object in 'combined' should have the properties 'id', 'name', 'position', and 'salary'.
// Use default values where necessary.

// Output the final 'combined' array.

// Your code here...


var combined2 = [
  ...employees, 
  ...salaries,
]

// console.log(combined2)

var defVal = {
  name: 'unknown', 
  position: 'unknown', 
  salary: 0
}

var resPay = combined2.map(({id, name,  position , salary }) => ({
  name: name || defVal.name, 
  position: position || defVal.position, 
  salary: salary || defVal.salary
}));


console.log(resPay)