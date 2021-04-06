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
    // console.log(`Mark's BMI of ${bmiMark} is higher than John's BMI of ${bmiJohn}.`)
} else {
    // console.log(`John's BMI of ${bmiJohn} is higher than Mark's BMI of ${bmiMark}.`)
}

// JS Challenge 3

// Test data 1
// const dolphinsAverageScore = (97 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;
// Test data 2
// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 123) / 3;
// Test data 3
const dolphinsAverageScore = (97 + 108 + 89) / 3;
const koalasAverageScore = (109 + 95 + 106) / 3;
console.log(dolphinsAverageScore);
console.log(koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log(`Dolphins are the champions!`);
} else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
    console.log(`Koalas are the champions`);
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log(`It's a tie!!`);
} else {
    console.log(`Nobody wins the championship!`)
}
