/*CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated 
using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

1; Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

2; Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

3; Log the value of BMIMark and BMIJohn to the console.

4; BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall. */

// WHAT I DID
// let massMark = 78; //kg
// let heightMark = 1.69; //m tall

// let massJohn = 92; // m tall
// let heightJohn = 1.95; //kg


// let BMI = massMark / massJohn;
// console.log(BMI)

// let BMIMark = 0.8478260869565217;
// let BMIJohn = 0.8478260869565217;

// console.log(BMIMark);
// console.log(BMIJohn);

// let markHigherBMI = false;
// console.log(markHigherBMI);



// THE CORRECT WAY TO DO IT

// let massMark = 78; //kg
// let heightMark = 1.69; //m tall
// let massJohn = 92; // m tall
// let heightJohn = 1.95; //kg

// let BMIMark = massMark / (heightMark * heightMark); // massMark(78) / heightMark(1.69) * heightMark(1.69);
// let BMIJohn = massJohn / (heightJohn * heightJohn); //massJohn(92) / heightJohn(1.95) * heightJohn(1.95);

// console.log(BMIMark, BMIJohn); //checking the results 

// let markHigherBMI = BMIMark > BMIJohn  // IF BMIMark is greater than BMIJohn, then console.log(markHigherBMI)

// console.log(markHigherBMI)




let massMark = 95; //kg
let heightMark = 1.88; //m tall
let massJohn = 85; // m tall
let heightJohn = 1.76; //kg

let BMIMark = massMark / heightMark ** 2; 
let BMIJohn = massJohn / (heightJohn * heightJohn);
// let BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


/* CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are. */


if (BMIMark >= BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}else {
 console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
};




/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

// WHAT I DID
/*let scoreDolphins = 96 + 108 + 89;
let  scoreKoalas = 88 + 91 + 110;


console.log(scoreDolphins);
console.log(scoreKoalas);

let aveScore = scoreDolphins = scoreKoalas;

//  let both;
if(scoreDolphins >= scoreKoalas) {
    console.log("Dolphins win the trophy")
}else if(scoreKoalas >= scoreDolphins) {
    console.log("Koalas win the trophy");
}else {
    console.log("Both win the trophy")
};
*/

// WHAT HE DID
let scoreDolphins = (96 + 108 + 89) / 3; //we divide it into the 3 times they have face eachother
let  scoreKoalas = (88 + 91 + 110) / 3;  //we divide it into the 3 times they have face eachother

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins >= scoreKoalas) {
    console.log("Dolphins win the trophy")
}else if(scoreKoalas >= scoreDolphins) {
    console.log("Koalas win the trophy");
}else  {
    console.log("Both win the trophy")
};

// ANOTHER EXAMPLE
scoreDolphins = (97 + 112 + 101) / 3; //CALLING BACK  THE VARIABLE ALREADY DECLARED
scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy")
}else if(scoreKoalas >= scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
}else  {
    console.log("Both win the trophy")
};

//ANOTHER EXAMPLE
scoreDolphins = (97 + 112 + 101) / 3; //CALLING BACK  THE VARIABLE ALREADY DECLARED
scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy")
}else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
}else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy")
}else {
    console.log("No one wins the trophy")
}



/*  Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 � */

//WHAT I DID
// let tip = (275 + 40 + 430) / 20;
// console.log(tip);

let bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
    ${bill + tip}`);

    // ANOTHER NUMBER
 bill = 40;
tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
    ${bill + tip}`);

    // ANOTHER NUMBER
    bill = 430;
tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
    ${bill + tip}`);


 
    