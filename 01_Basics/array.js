const myArr = [1,2,3,4,5];
const heros = ["ali", "waseem", "nabeel"];

const myArr2 = new Array(4,5,6,7,8);

//console.log(myArr[1]);

//Array Methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(8);
// myArr.shift();

//console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

//slice splice
//console.log("A ", myArr);
const myn1 = myArr.slice(1,3);
//console.log(myn1);

//console.log("B ", myArr);
const myn2 = myArr.splice(1,3);
//console.log(myn2);

const marvelHeros = ["ali", "waseem", "nabeel"];
const dcHeros = ["waqas","umair","zia"];
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

const allheros = marvelHeros.concat(dcHeros);
console.log(allheros);

//spread operator
const allNewHeros = [...marvelHeros,...dcHeros];
console.log(allNewHeros);