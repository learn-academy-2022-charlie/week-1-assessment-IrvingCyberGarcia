// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10 since it is the lenght of the string
// b) Verify and explain:I was correct since leght is a comand that returns the number of elements in an array


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: error, since the [] is not identified
// b) Verify and explain: "o" since [] specifies that the 4th letter in the string taking in consideration the string starts from 0.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby" since the index of of 1 specifies the location of data on a string
// b) Verify and explain: I was correct because the string starts from 0


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: "Saturday" "Sunday" since it is using a function to uppercase the const
// b) Verify and explain: the correct answer is error since toUpperCase is not a function. ToUpperCase is a variable name  wich we often use to identify data and is always in camel case


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer:6,6,7 since it is using the .lenght function wich will count in number each word.
// b) Verify and explain: the correct answer is number since
