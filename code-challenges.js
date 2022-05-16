// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
//
// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"



// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
const temp1 = 42
const temp2 = 350
const temp3 = 212

const temp = (temp1, temp2, temp3)
const anyGivenNum = (temp) =>{
  if(temp === 42) {
    return "42 is below boiling point"
  } else if (temp === 212) {
    return "212 is at boiling point"
  }else if (temp === 350){
    return "350 is above boiling point"
  }
}
console.log(anyGivenNum(42))
console.log(anyGivenNum(350))
console.log(anyGivenNum(212))

// //Hey reviewer my outputs were:
// "42 is below boiling point"
// "350 is above boiling point"
// "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9];
const myNumbers2 = [8, -7, 42, 9, 13];

const merged = ( myNumbers1, myNumbers2) => {
  for(let i= 0 ; i< myNumbers2.lenght; i++){
    myNumbers1.push(myNumbers2[i]);
  }
  return myNumbers1 + myNumbers2
}

console.log(merged(myNumbers1, myNumbers2))

//Hey reviewer my outputs was:
// 3,7,0,36,-98,-7,42,9,13

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

const currentCohort = "Charlie 2022"

let reversedcurrentCohort = '';
for (let i = currentCohort.length - 1; i >= 0; i--) {
  reversedcurrentCohort += currentCohort[i];
}
console.log(reversedcurrentCohort)

//Hey reviewer my outputs was:
//2202 eilrahC



// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

for(let index = 0; index < myArray.length; index++){

  if( myArray[index] % 2 === 0){
    console.log("even")
  } else {
    console.log("odd")
  }

}

// //Hey reviewer my outputs were:
// odd
// even
// odd
// even
// odd
// even


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const multiplier = (number1, number2, number3, number4) => {
  return number1 - number2 ; number4 - number3
  // return number4 - number3
}
console.log(multiplier(number2, number1))
console.log(multiplier(number3, number4))


//Hey reviewer my outputs were:
// 42
// 3
