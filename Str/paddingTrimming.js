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