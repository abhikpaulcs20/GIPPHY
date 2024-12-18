//QUESTION 1 -  CREATE A DATABASE NAMED STUDENTDATABASE AND MAKE A FUNCTION WHERE YOU PASS THE DATA AND THAN FIND A NAME SPECIFIC
// const studentdatabase = ["jhon", "erric", "maylot", "revetiz"]; // creating an array database

// const findStudent = (allStudents, studentName) => {
//   //  arror function
//   let found = false;
//   for (let i = 0; i < allStudents.length; i++) {
//     if (allStudents[i] == studentName) {
//       console.log(`Found ${studentName}`);
//       found = true;
//       break;
//     }
//   }
//   if (!found) {
//     console.log("Not found");
//   }
// };

// findStudent(studentdatabase, "erric"); // calling the function and passing the {studentdatabase and the targetname} as a parameters
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUESTION 2 - CREATE A FUNCTION TO GREET AND YOU JUST PASS THE NAME AS A PARAMETER
// const greet = (firstName) => {
//   console.log(`Hello ${firstName}`);
// };

// greet("Abhik");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CURRYING CONCEPT  in js
// Question - sum(2)(4)(5)

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(4)(5));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let x = "Learn";
// console.log(x.substring(5, 1));
// whenever we provide the start index greater than the end index , js will swap
// output - earn
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BIG O  NOTATION
// BIG O NOTATION HELPS TO UNDERSTAND HOW LONG OR HOW MUCH TIME AN ALGORITHM WILL TAKE TO RUN OR
// HOW MUCH MEMORY IT WILL NEED AS THE AMOUNT OF DATA IT IT HANDLES IT GROWS
//////////
//learn use memo , - https://www.youtube.com/shorts/L-pV82e0qWk

// To print all the alphabets without using any array a-z

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));      // return the asci value

// for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
//   console.log(String.fromCharCode(i));
// }
//look at the typo
