const mySym = Symbol('key1');
const jsUser = {
    name: "Waseem",
    "full name": "Waseem Zahid",
    [mySym]: "mykey1",
    age: 26,
    location: "Lahore",
    email: "waseemzahid64@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);      //not good approach
console.log(jsUser["email"]); 
console.log(jsUser["full name"]); 
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);