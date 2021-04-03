// JS Challenge 1

let massMark, massJohn, heightMark, heightJohn;

// Test Data 1
// massMark = 78;
// heightMark = 1.69;
// massJohn = 92;
// heightJohn = 1.95;

// Test Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// const markHigherBMI = bmiMark > bmiJohn;

// 2 ways of working out BMI
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn, markHigherBMI);

// JS Challenge 2

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI of ${bmiMark} is higher than John's BMI of ${bmiJohn}.`)
} else {
    console.log(`John's BMI of ${bmiJohn} is higher than Mark's BMI of ${bmiMark}.`)
}