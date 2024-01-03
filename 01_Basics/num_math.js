//************Number*****************
const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 736.89;
//console.log(otherNum.toPrecision(3));

const hundreds = 10000000;
//console.log(hundreds.toLocaleString());

//************Math*****************
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,2,8,10,11,0));
console.log(Math.max(4,2,8,10,11,0));
console.log(Math.random());   //give value between 0 & 1
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1)) + min);