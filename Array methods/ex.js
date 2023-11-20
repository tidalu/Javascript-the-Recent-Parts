// Given an array of users, each with an array of orders, calculate the total order amount for each user.
// Use flatMap to flatten the nested structure, and then use reduce to calculate the total order amount for each user.

const users = [
    { id: 1, name: 'John', orders: [10, 20, 30] },
    { id: 2, name: 'Alice', orders: [15, 25] },
    { id: 3, name: 'Bob', orders: [5, 10, 15] }
  ];
  
  // Your task is to use flatMap and other array methods to create an array of objects
  // where each object contains the user's id, name, and total order amount.
  
  // Output the final array.
  
  // Your code here...
  var result = users.map(({id, name, orders}) => ({
    id, 
    name, 
    totalSum : orders.reduce((val, sum) => val + sum, 0) 
  }))
  
  console.log(result)