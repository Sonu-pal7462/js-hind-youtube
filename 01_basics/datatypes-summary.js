// Primitive
 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 456456457546n


// Reference (Non primitive)
 //   Array, Objects, Functions

 const heros = ["shaktiman", "nagraj", "doga"];
 let myObj = {
    name: "sonu",
    age: 22,
 }

 const myFunction = function(){
    //console.log("Hello world");
 }

//  console.log(typeof bigNumber);
//  console.log(typeof score);
//  console.log(typeof scoreValue);
//  console.log(typeof isLoggedIn);
//  console.log(typeof outsideTemp);
//  console.log(typeof userEmail);
//  console.log(typeof myFunction);
//  console.log(typeof heros);



 // ++++++++++++++++++++++++++++++++++++++++++++++

 // Stack (Primitive), Heap (Non-Primitive)

 let myYoutubename = "sonukumarpalcom"

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(anothername);
 console.log(myYoutubename);

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "sonupal@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);