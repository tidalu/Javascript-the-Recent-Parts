var a = {
    a: 1, 
    b: 2, 
    [Symbol.iterator]: function(){
      var keys = Object.keys(this);
      var index = 0;
      return {
        next : () => (index < keys.length) ?
                      {done: false, value : this[keys[index++]] } :
                      {done: true , value : undefined }
      }
    }
  };
  
  
  for(let val of a) {  // object does not have iterator
    console.log(val)
  }
  
  
  var iteratedObj = [...a]
  console.log(iteratedObj)
  var str = "Hello word00";
  
  var letter = [...str];
  console.log(letter)
  
  
  
  // Generator functions 
  
  
  function *main () {
    yield 1;
    yield 2;
    yield 3;
    return 4;
  }
  
  var min = main()
  console.log(min.next());
  console.log(min.next());
  console.log(min.next());
  console.log(min.next());
  
  var letsIterate = {
    a: 1, 
    b: 2, 
    c: 3, 
    *[Symbol.iterator](){
      for(let key of Object.keys(this)) {
        yield [key, this[key]]
      }
    }
  }
  
  
  
  var lets = [...letsIterate]
  console.log(lets)