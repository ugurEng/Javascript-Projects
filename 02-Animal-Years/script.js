// input your age
const myAge = prompt('What is your Age?');
//const myAge = 23;

// the first two years of a dog’s life count as 10.5 dog years each
let earlyYears = 2 * 10.5;
earlyYears = earlyYears * 10.5;

// each year following equates to 4 dog years
let laterYears = myAge - 2;

laterYears *= 4;

// converting human age into dog years
let myAgeInDogYears = earlyYears + laterYears;

console.log (myAgeInDogYears);

let myName = "Jonas".toLowerCase();

// using string interpolation to print the result
//console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
alert(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
