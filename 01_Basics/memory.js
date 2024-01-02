// stack(primitive) and Heap(Non-primitive)
let name = "Waseem";
let anothername = name;
anothername = "Zahid"

// console.log(name);
// console.log(anothername);

let userOne = {
    name: "Waseem",
    email: "waseem@re2qa.com"
}

let userTwo = userOne;
userTwo.email = "waseemzahid@re2qa.com"

console.log(userOne.email);
console.log(userTwo.email);