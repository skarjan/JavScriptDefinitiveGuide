// JavaScript: The Definitive Guide
const log = (msg) => {
  return console.log(msg);
}

//3.2.6 Dates and Times
let timestamp = Date.now();
let now = new Date();
let ms = now.getTime();
let iso = now.toISOString();


// 3.3.3 Working with Strings
// Sample string
let s = "Hallo wereld";

// length and concatenation
let greeting = s + ", " + "Hoe gaat het?" // concatenation 
s.length // string length

// obtaining portions of a string
s.substr(1, 4); // first arg indicates starting index 2nd arg indicates length
s.slice(-3); // remove last 3 characters
s.split(" ") // split on delimiter " "

// search methods
// let s = "Hallo wereld";
s.indexOf('l'); // => 2, index of the first char that matches 'l'
s.indexOf('l', 3) // => index of char following the char with index of n
s.lastIndexOf('l')
s.indexOf('q') // => -1, because 'q' is not included in s

// boolean searches (ES6)
// let s = "Hallo wereld";
s.startsWith("Hallo"); // => true
s.endsWith("d"); // => true
s.includes("were") // => true

// modifying strings
// Be aware that strings are immutable, Meaning these methods wont alter the original string.
// reassign the variable or create a new one to get around this
// let s = "Hallo wereld";
s.replace("lo wereld", "ogene lampen"); // "Hallo wereld" => "Halogene lampen"
s.toLowerCase(); // => "hallo wereld"
s.toUpperCase(); // => "HALLO WERELD"

// normalize strings

// consider the following input and its corresponding output
let string1 = '\u00F1'; // 'ñ'
let string2 = '\u006E\u0303'; // 'ñ'

// the same output is made up of different unicodes. 
// string1 contains the direct representation of the ñ char
// string2 combines two unicode codepoints n and ~ into the character ñ
// visually identical, but javascript will still see the difference in length:
string1.length // => 1
string2.length // => 2

// this is where normalize comes in to play
// remember strings are immutable
// so we reassign them by calling the normalize method on the original string 
string1 = string1.normalize('NFD')
string2 = string2.normalize('NFD');

// now they have the same length
string1.length // => 2
string2.length // => 2

// reassignment with NFC argument
string1 = string1.normalize('NFC')
string2 = string2.normalize('NFC');

// now they also have the same length
string1.length // => 1
string2.length // => 1

// individual characters
// let s = "Hallo wereld";
s.charAt(6);          // => 'w'
s.charAt(s.length-1); // => 'd' being the last letter
// the above syntax works because the index is 0 based. But the length is 1 based.
// picking the last entry using index = length - 1
// picking the last entry using length = index + 1
s.charCodeAt(0); // => 72, character code for "H"
s.codePointAt(0) // => 72, (ES6) supports character codes > 16 bit

// string padding functions 
s.padStart(13); // => " Hallo wereld" 
// adds " " on the end of the string, counting from the the last char to the first, until it reaches the specified length(NOT INDEX!), 13 in this case.
// If the specified length value is less than s.length, then s is returned as-is.
s.padEnd(13); // => "Hallo wereld ", the same as above. 
// But counting from the first char to the last. Then adding space until the specified length
// If the specified length value is less than s.length, then s is returned as-is.
s.padStart(13, "x"); // => "xHallo wereld"
s.padEnd(13, "-"); // => "Hallo wereld-"