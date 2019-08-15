// Name Analyzer Exercise done allone :(
//Author: Simon Schötz
/*
const name = "Winston";
console.log(`Hello ${name}.
Your name is ${name.length} letters long.
The first letter of your name is ${name[0]}, the last is ${name[name.length -1]}.
If I wanted to be funny, I would call you ${name.substring(0, 4)}chmoo. `);
*/
/*
const name = "Winston Churchill";
const nameWOSpace = name.replace(/\s/g, "");
console.log(`Hello ${name}.
Your name is ${nameWOSpace.length} letters long.
The first letter of your name is ${name[0]}, the last is ${name[name.length -1]}.
If I wanted to be funny, I would call you ${name.substring(0, 4)}chmoo. `);
*/
const name = "    Winston Churchill    ";
const nameWOSpace = name.replace(/\s/g, "");
const nameTrim = name.trim();
console.log(`Hello ${nameTrim}.
Your name is ${nameWOSpace.length} letters long.
The first letter of your name is ${name[0]}, the last is ${name[name.length -1]}.
If I wanted to be funny, I would call you ${name.substring(0, 4)}chmoo. `);
