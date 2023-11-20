var name45 = "Kyle Sympson";
var email45 = "ulugio23@gmail.com";
var title45 = "Student";
var number = 48789725742

var msg = `Hello everybody, My madeup name is ${name45}, and here is my contacts in case of necessity : ${email45} and ${number}, and i am a ${title45} `




function tag(string, ...values) {
  return [string, values]
}

console.log(tag`Hello everybody, My madeup name is ${name45}, and here is my contacts in case of necessity : ${email45} and ${number}, and i am a ${title45} `)
console.clear()

function simpleTag(strings, ...values) {
  console.log("string: ", strings);
  console.log("Values: ", values);
}

simpleTag`Hello everybody, My madeup name is ${name45}, and here is my contacts in case of necessity : ${email45} and ${number}, and i am a ${title45} `


function repeatTag(strings, ...values) {
  const repeatCount = values[0] || 1;
  return strings[0].repeat(repeatCount)
}

const result = repeatTag`*${30}`;
console.log(result)

function lengthTag(strings, ...values) {
  console.log("Length: ", values[0].length);
}

lengthTag`${"this si fantastik"}` // 17


function concatTag(strings, ...values) {
  return values.join(' ');
  
}

const firstName = 'John';
const lastName = 'Doe';
const result1 = concatTag`${firstName} ${lastName}`;
console.log(result1);



function uppercaseTag(strings, ...values) {
  return values[0].toUpperCase();
}

const word = 'hello';
var again = uppercaseTag`${word}, ${"Wordl"}`
console.log(again);

function toUpperCase(strings, ...values) {
  let result = '';
  for(let i = 0; i < strings.length; i++) {
    result += strings[i];
    if(i < values.length) {
      result += String(values[i]).toUpperCase();
    }
}
  return result;
}

var again = toUpperCase`Hello everybody, My madeup name is ${name45}, and here is my contacts in case of necessity : ${email45} and ${number}, and i am a ${title45} `

console.log(again)


function dollarFormatter(strings, ...values) {
  var res = "";
  
  for(let i = 0; i < strings.length; i++ ) {
    res += strings[i];
    if(i < values.length && typeof values[i] == "number" ) {
      res += `$${values[i].toFixed(2)}`
    }
  }
  return res;
}
function dollarFormatter2(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? `$${values[i].toFixed(2)}` : values[i];
    return result + str + value
  }, "")
}
var again = dollarFormatter`This whatever happening in Gaza will cost ${10000} trillion for israhell`

console.log(again)