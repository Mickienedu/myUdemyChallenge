// Developer Skills & Editor Setup


//55. Setting up Prettier and VS Code
//configuring vs-code
//click on extension button and search for prettier, install it and enable it


// 56. Installing Node.js and Setting Up a Dev Environment
// google nodejs and click on the first Option. then download the windows option 

// IN YOUR TERMINAL, WRITE 'node -v'
// you will see the number of the version, it tells you that you have successfully installed node 
//write; npm install live-server -g
//live-server 


// 57. Learning How to Code
//58. How to Think Like a Developer: Become a Problem Solver!

//59. Using Google, StackOverflow and MDN

/*PROBLEM 1; we work for a company building a smart home thermometer.
Our most recent task is this; 'Given an array of temperatures of one day, calculate the 
temperature amplitude, keep in mind that sometimes there might be a sensor 
error */
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1. understanding the problem
//- what is temp amplitude? Answer; different btw highest and lowest temp.
//-How to compute the max and min temperature?
//-what's a sensor error? and what to do?

//2. Breaking up into sub-problems
//-how to ignore errors?
//-find max value in temp array
//-find min value in temp array
//-subtract min from max (amplitude) and return it


//-find min value in temp array

// const calcTempAmplitude = function (temps) {
// //using google. search 'javascript get max value in an array'
// let max = temps[0];
// let min = temps[0];

// for(let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if(curTemp > max) max = curTemp;
//     if(curTemp < min) min = curTemp;
//     console.log(max, min);
// }
// };
// calcTempAmplitude([3, 7, 4, 1, 8]); //8 1

//-find max value in temp array

// const calcTempAmplitude = function (temps) {
// //using google. search 'javascript get max value in an array'
// let max = temps[0];
// for(let i = 0; i < temps.length; i++) {
//     if(temps[i] > max) max = temps[i];
//     console.log(max);
// }
// };
// calcTempAmplitude([3, 7, 4]); //7
//the max = 3
//max = 7


const calcTempAmplitude = function (temps) {
    //using google. search 'javascript get max value in an array'
    let max = temps[0];
    let min = temps[0];
    
    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;
    
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;

    }
    console.log(max, min);
        return max - min;
    };
    const amplitude = calcTempAmplitude(temperatures);
    console.log(amplitude);

    // problem 2
    //function should now receive 2 arrays of temps

    // 1) understanding the problem
    // -with 2 arrays, should we implement functionality twice? NO! just merge two arrays

    // 2) breaking up into sub-problems
    // -merge 2 array

    /* search for 'javascript merge to arrays' on google */
    //always look up to MDN whenever you are stuck


    const calcTempAmplitudeNew = function (t1, t2) {
        const array1 = ['a', 'b', 'c'];
        const array2 = ['d', 'e', 'f'];
        const array3 = array1.concat(array2);

        const temps = t1.concat(t2);
        console.log(temps);


        let max = temps[0];
        let min = temps[0];
        
        for(let i = 0; i < temps.length; i++) {
            const curTemp = temps[i];
            if(typeof curTemp !== 'number') continue;
        
            if(curTemp > max) max = curTemp;
            if(curTemp < min) min = curTemp;
    
        }
        console.log(max, min);
            return max - min;
        };
        const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
        console.log(amplitudeNew);


    
// 60. Debugging (Fixing Errors)

// 61. Debugging with the Console and Breakpoints
//how to use debugger in google chrome
//1. click on sources
//2. click on your js file
//3. you can also use breakpoint to stop some codes from working by just clicking on the particular line of code you dont want to see

// I WILL STUDY MORE ON DEBUGGER 



//62. Coding Challenge #1
/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4] 
*/

//1. understanding the problem
//-array transformed to string, separated by ...
//-what is the X days? answer; index + 1

//2. breaking up into sub-problems
//-transform array into string
//-transform each element to string with 'c
//-strings needs to contain day (index + 1)
// -add ... btw elements and start and end of string 

// transforming the arrays into a String
const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4] 

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`)

//NUMBER 1
// const printForecast = function(arr) { 
//     let str = '';
//     for(let i = 0; i < arr.length; i++) {
//         str = str + `${arr[i]}ºC`;
//     }
//     console.log(str)
// }
// printForecast(data1);


//NUMBER 2
const printForecast = function(arr) { 
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}ºC in ${i + 1} days ...`;
    }
    console.log('...' + str)
}
printForecast(data1);

