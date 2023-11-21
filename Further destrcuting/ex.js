// Create a function printPerson that takes an object representing a person
// and prints their name, age, and city. Use named arguments for clarity.
function printPerson({ name, age, city } = {}) {
    return `Name: ${name}, Age: ${age}, City: ${city} `;
    
  }
  
  var obj = {
    name: "Alif", 
    age: 23,
    city: "Lodz"
  }
  console.log(printPerson(obj || {}))
  
  // ___________________________________________________
  // Create a function printUser that takes an object representing a user
  // and prints their username, email, and role. Use named arguments for clarity.
  function printUser({ username, email, role } = {}) {
    console.log(`${username}, ${email}, ${role}`)
  }
  
  printUser({
    username: "", 
    email: "", 
    role: ""
  })
  
  
  // ___________________________________________________
  
  // Given an array of numbers, write a function getMinMax
  // that uses array destructuring to return the minimum and maximum values.
  function getMinMax(numbers) {
    return [
      Math.min(...numbers), 
      Math.max(...numbers)
    ] 
  }
  
  
  //  _________________________________
  
  function displayBook({ title, author, genre }) {
    // Your code here
    
    return `${title}, ${author}, ${genre}`
  }
  
  console.log(displayBook({
    title: "", 
    author: "", 
    genre: ""
  }))
  
  //   ---------------------------------------
  
  var [min, max] = getMinMax([3, 5, 6, 12, 67, 45 ,89])
  
  console.log(min, max)
  
  //  -------------------------------------------
  
  
  function getAverage(numbers) {
    return [
      [...numbers].length, 
      numbers.reduce((val, sum) => val + sum, 0),
      numbers.reduce((val, sum) => val + sum, 0) / numbers.length 
    ]
  }
  
  var [ length, sum, average ] = getAverage([1, 2,3, 4, 5, 65, 6]);
  
  console.log([average, sum, length ])
  
  
  //  ++++++++++++++++++++++++++++++
  
  function extractCityInfo(city) {
    var {
      name : name1, 
      population: popp2 
    } = city || {};
    return {
      name1, 
      popp2
    }
  }
  
  
  var { name1, popp2 } = extractCityInfo({
    name: "Medinah", 
    population: 1.4, 
    country: "SAUDI"
  }) 
  
  console.log(name1, popp2)
  
  // // Given an array of cars (objects with properties make, model, year),
  // create a new array with the same cars but with the property names
  // renamed to carMake, carModel, and carYear.
  const cars = [{ make: 'Toyota', model: 'Camry', year: 2022 }, /* ... other cars */];
  
  const restructuredCars = cars.map(({ make, model, year }) => ({
    carMake: make,
    carModel: model,
    carYear: year,
  }));
  
  
  // 
  // Create a function createProduct that takes an object representing a product
  // with named arguments name (string) and price (number).
  // Provide default values of 'Unknown' for name and 0 for price.
  function createProduct({ name = 'Unknown', price = 0 }) {
    // code there
    return {name, pricec}
  }
  
  
  // Given an array of students with properties fullName, major, and gpa,
  // create a new array where each object only contains name and major properties.
  const students = [
    { fullName: 'Alice Smith', major: 'Computer Science', gpa: 3.8 },
    /* ... other students */
  ];
  
  const simplifiedStudents = students.map(({fullName = "unknown", major = "Unknown "}) => ({
    fullName , major
  }))
  
  
  // Write a function createCustomer that takes an object with named arguments
  // name (string) and discount (number). Validate that name is a non-empty string
  // and discount is a number between 0 and 1.
  function createCustomer({ name , discount  }) {
    return {
      name : typeof name == "string" && name.trim() != "" ? name: "Not given", 
      discount: typeof discount == "number" && 0 < discount && discount < 1 ? discount : 0
    } 
  }
  
  
  var custormer = createCustomer({name: "", discount: 1.5 })
  console.log(custormer)