// padstart

// takes two args but second one is optional 
// 1- what length u want to pad to


var str = "Hello";
str.padStart( 5 ); // "Hello";
str.padStart( 8 );  // "   Hello";
str.padStart( 8, "*" ); // "***Hello"
str.padStart( 8, "12345" ); // "123Hello"
str.padStart( 8, "ab" ); // "abaHello"

str.padEnd( 5 ); // "Hello"
str.padEnd( 8 , "*" ) // "Hello***"


// trimming

var str1 = "    str str some stuff  \t\t";

str.trim();  // "str str some stuff"
str.trimStart(); // "str str some stuff          "
str.trimEnd(); // "    str str some stuff"


// problem with tag function with string pad trim

function formatString(strings, ...values) {
    var res = "";
    for(let i = 0; i < strings.length; i++) {
      res += strings[i];
      if(i < values.length) {
      if(typeof values[i] === "string") {
        res += values[i].padStart(values[i].length + 3, " ").padEnd(values[i].length + 6, "!");
      } else if (typeof values[i] === "number") {
        let strNum = String(values[i]);
        res += strNum.padStart(strNum.length+4, "->").padEnd(strNum.length+8, ".");
      } else {
        res += String(values[i])
      }
      }
    }
    return res
  }
  console.clear()
  const name = 'John';
  const age = 25;
  const formattedString = formatString`Name: ${name}, Age: ${age}`;
  console.log(formattedString);
  // Expected Output:"Name:    John!!!, Age: ->->25...."
  
  