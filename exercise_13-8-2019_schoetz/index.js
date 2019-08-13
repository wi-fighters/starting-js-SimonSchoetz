//Exercise: Mathmatical exercises with JavaScript
//Author: Simon Schötz

// 1 Percent
/*
let everything = 30;
let justAPart = 17;
console.log("result: " + justAPart/ (everything/100) + "%");
*/

// 2 Working with Averages
/*
console.log( (hours+8+6+5+9+8+2+1+8.5+7)/9 );
//--> Average hours  6.055555
*/

// 3 Score
let fiveTestScores = (75+70+85+90+100);
let average = 85;
let amountsTest = 6;
let allTestScores=average * amountsTest;
let missingTest = allTestScores - fiveTestScores;
console.log(`Score in the sixth test: ${missingTest}`);
