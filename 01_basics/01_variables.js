const accountId = 144553
let accountEmail = "sonu@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2323 // not allowed

accountEmail = "pal@hacker.com"
accountPassword = "5345"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountState, accountCity]);
