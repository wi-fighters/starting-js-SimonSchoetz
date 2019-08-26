//Changing variables exercise
//Author: Simon Schötz

// 1

let name = "Simon Schötz";
name = "You wot m8!";
//console.log(name);

// 2
//console.log("Schm" + name);

// 3 It still will be a string but adding "Schm" doesnt change the value of name
//console.log(typeof "Schm" + name);

// 4
//console.log(name); //Well, the first value is reassigned by the reassign thingy so actually, there are no 2 different values at the end..... . . . .. .

// 5 & 6
let coffee = 290;
let x = "Eva";
let y = 34;
let daysBeforeExam = 13;
//console.log(`${x} drinks ${y} cups of coffee per day.`);

// 7 & 8
//console.log(`${x} drinks ${y} cups of coffee per day with ${daysBeforeExam} days before exam.`);

// 9

y += 1;
daysBeforeExam -= 1;
//console.log(`${x} drinks ${y} cups of coffee, with ${daysBeforeExam} before the exam.`);

// 10: y has 35 and daysBeforeExam has 12
//console.log(y, daysBeforeExam);

// 12-14: it will print You wot m8!Schm
const schmozzler = "Schm";
console.log(name.concat(schmozzler));
