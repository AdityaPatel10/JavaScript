// '+' this symbol is used to add to strings
const firstName = "Aditya";
const lastName = " Patel";
const fullName = firstName + lastName;
console.log(fullName);
//we can change the latter using indexes we all know string is the array of characters
console.log("First Letter= ", firstName[0]);
//here the keyword for finding the length of the string
console.log("Length= ", fullName.length);

//2nd code

let ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);
console.log("Length= ", ourStr .length);

//3rd

const anAdjective = "awesome!";
let Str = "Metacrafters is ";
Str += anAdjective;
console.log(Str);
console.log("Length= ", Str.length);