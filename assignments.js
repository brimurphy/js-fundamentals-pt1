// 1: Values and Variables
let country = "Ireland";
let continent = "Europe";
let population = 4937786;

// console.log(country, continent, population);

// 2: Data Types
const isIsIsland = true;
let language;
// console.log(typeof isIsIsland,
// typeof population, typeof country,
//     typeof language);

// 3: let, const, var
language = "English";
// Try redefine const variable
// isIsIsland = false;

// 4: Basic Operators
const halfPopulation = population / 2;
// console.log(halfPopulation);
population++;
// console.log(population);
const finlandPopulation = 6000000;
const isPopulationBigger = population > finlandPopulation;
// console.log(isPopulationBigger);
const avgPopulation = 33000000;
const isLessThanAvgPopulation = population < avgPopulation;
// console.log(isLessThanAvgPopulation);
const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
// console.log(description);

// 5: Strings and Template Literals
const descriptionNew = `${country} is in ${continent}, and its ${population} people mostly speak ${language}`;
// console.log(descriptionNew);

// 6: If/Else Statements
if (population > avgPopulation) {
    // console.log(`${country}'s population is above average.`)
} else {
    // console.log(`${country}'s population is below average.`)
}

// 6: Type Conversion and Coercion
// Predict the result of these 5 operations without executing them:
// Then log them to check if you are right.
'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143

//  7: Equality Operators: == vs ===