//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let myName = "Zain Ahmed";
let lowerCaseName = myName.toLowerCase();
let upperCaseName = myName.toUpperCase();
let titleCaseName = myName
  .toLowerCase()
  .split(" ")
  .map((word) => word.replace(word[0], word[0].toUpperCase()))
  .join(" ");
  console.log(lowerCaseName);
console.log(upperCaseName);
console.log(titleCaseName);   
