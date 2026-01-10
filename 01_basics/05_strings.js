const name = "sonu"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sonupal-sp-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.legth);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  sonu  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https//sonupal.com/sonu%20bhagat"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));
console.log(url.includes('sonupal'));

console.log(gameName.split('-'));
console.log(gameName.split('%'));
