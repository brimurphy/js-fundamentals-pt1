// 1: Values and Variables
let country = "Ireland";
let continent = "Europe";
let population = 4937786;

console.log(country, continent, population);

// 2: Data Types
const isIsIsland = true;
let language;
console.log(typeof isIsIsland,
    typeof population, typeof country,
    typeof language);

// 3: let, const, var
language = "English";
// Try redefine const variable
// isIsIsland = false;

// 4: Basic Operators
const halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);
const finlandPopulation = 6000000;
const isPopulationBigger = population > finlandPopulation;
console.log(isPopulationBigger);
const avgPopulation = 33000000;
const isLessThanAvgPopulation = population < avgPopulation;
console.log(isLessThanAvgPopulation);
const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
console.log(description);