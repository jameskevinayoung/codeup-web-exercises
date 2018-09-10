//PUSH UPS
//create a function that takes a sentence
// function findLongestWord(sentence){//create a function that takes a sentence
//     var sentenceSplit =  sentence.split(" ");// Split the string into an array of strings
//     console.log(sentenceSplit)
//     var longestWord = 0;//Initiate a variable that will hold the length of the longest word
//
//     for(var i = 0; i < sentenceSplit.length; i++){//create a loop that iterates through the string
//         if (sentenceSplit[i].length > longestWord){//if the iteration is longer than longest word var
//             longestWord = sentenceSplit[i].length;//this is the new value of the longest word
//         }
//     }
//     return longestWord;//returns the longest word
// }
// console.log(findLongestWord("I like going out to parties with friends or watching TV."));
//
// console.log(findLongestWord("To be or not to be that is the question"));


//returns the longest word


// function squareParameters(a, b, c){
//     var aSquared = a * a;
//     var bSquared = b * b;
//     var cSquared = c * c;
//
//     if(aSquared + bSquared === cSquared){
//         console.log(aSquared + " + " + bSquared + " = " + cSquared);
//     }else{
//         console.log(false);
//     }
//
// }
//
// squareParameters(3, 4, 5);
// squareParameters(5, 7, 3);
// squareParameters(0, 9, 8);


// WRITE A FUNCTION THAT TAKES A STRING AND RETURNS THE FIRST WORD WITH THE GREATEST NUMBER OF REPEATED LETTERS.

// function countReps(word){
//     var mostReps = 0;//initialize variable to hold the number of repeated letters in a word
//
//     for(var i= 0; i < word.length; i++) {// i iterates the word first time
//         var reps = 1;//initialize variable reps with a value to begin with
//
//         for(var j= 0; j < word.length; j++){//j iterates the word second time
//             if(i !== j && word[i].toLowerCase() === word[j].toLowerCase()) { //compares i and j letters && word[i] and word[j]
//                 reps++;//increments number of reps
//             }
//         }
//         if(reps > mostReps){//compares the previous "if" output reps and compares to mostReps variable;
//             mostReps = reps;//if the reps is greater than the previous mostReps, then reps becomes the mostReps
//         } //if 2 is > 1, then 2 becomes the new number of most reps
//     }
//     return mostReps;//give the final mostReps number per argument.
// }
//
//
// console.log(countReps("greenery"));
// console.log(countReps("tennessee"));
// console.log(countReps("aluminium"));
// console.log(countReps("Mississippi"));


//multiply function that takes 2 parameters num1 and num2 where you multiply the two parameters without the "*" key. make a loop:

// function multiplication(x, y){
//     let product = 0;
//     for(let i = 0; i < y - 1; i++){
//         product += x;
//     }
//     return product
// }
// console.log(multiplication(3, 4));
//
// function exponentiate(x, y){
//     let product = 1;
//     for(let i = 0; i < y - 1; i++){
//         product *= x;
//     }
//     return product
// }
// console.log(exponentiate(3, 4));


// function factorial(x){
//
//     if(x === 0 || x === 1 ){//prevents having a negative number or zero number
//         return 1;
//     }
//     for (var i = x - 1; i > 0; i--){//variable starts at the number - 1 and decrements
//         x *= i;//making the x = to the number times the i
//     }
//     return x;
// }
//
// console.log(factorial(10)); //3,628,800;; my function originally returned an extra 0 without the minus 1
//
// function summation(x){
//     for(var i= x-1; i > 0; i--){
//         console.log(x + " + " + i);
//         x += i;
//     }
//     return x;
// }
//
// // var summation = function(num) {//teacher's example
// //     var sum = 0;//initializes the variable
// //     for (var i = num; i > 0; i--){//don't need minus 1 in the i variable
// //         sum += i;
// //
// //     }
// //     return sum;
// // };
//
//
// console.log(summation(5));
// console.log(summation(7));
// console.log(summation(9));


// STUDY HALL 8/22/18
/**
 * WRITE A FUNCTION
 * TAKES A STRING
 * RETURNS STRING W/ "PY" IN FRONT
 * IF ALREADY STARTS W/ "PY", RETURN ORIGINAL STRING
 */
//--------------------------------------------------------
// function prependTo(word){
//     word.toLowerCase();
//     if(word.substring(0,2) === "py"){
//         return word;
//     }else {
//         return "py" + word;
//     }
// }
// console.log(prependTo("pyromania"));
// console.log(prependTo("animal"));
//--------------------------------------------------------

// pushup 8/23/18

// var superHero = {
//     codeName: ,
//     secretIdentity:{
//         name:"James Young",
//         occupation: "software developer",
//     },
//     superPower:function(){
//         console.log("THis is my power set")
//     }
//     hairColor:,
//     eyeColor:,
// };
//
// var superHero1 = {
//     codeName: ,
//     secretIdentity:{
//         name:,
//         occupation:,
//     },
//     superPower:{
//         power1:,
//         power2:,
//     },
//     hairColor:,
//     eyeColor:,
// };
// var superHero2 = {
//     codeName: ,
//     secretIdentity:{
//         name:,
//         occupation:,
//     },
//     superPower:{
//         power1:,
//         power2:,
//     },
//     hairColor:,
//     eyeColor:,
// };
// var superHero3 = {
//     codeName: ,
//     secretIdentity:{
//         name:,
//         occupation:,
//     },
//     superPower:{
//         power1:,
//         power2:,
//     },
//     hairColor:,
//     eyeColor:,
// };
//
// var superAvengers = []
// superAvengers.push(superHero);
// superAvengers.push(superHero1);
// superAvengers.push(superHero2);
// superAvengers.push(superHero3);

//ARRAY PRACTICE
// (function(){
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an array to hold the first names of your classmates in a variable called 'names' and console log the result.
//      * Next only add your name and push other names to the list.
//      *
//      */
//
//     var names = ["James"];
//     console.log(names);
//
//     /**
//      * WHAT WAS YOUR RESULT? WAS IT AN ARRAY WITH JUST YOUR NAME IN IT? WHAT WAS THE ARRAY INDEX OF YOUR NAME?
//      * WHAT WAS THE NUMBER NAMES IN THE ARRAY?
//      */
//
//
//
//     names.push("Mike");
//     names.push('Ryan');
//     names.push('Tamisha');
//     names.push('Jolivet');
//     names.push('Hunter');
//     names.push('Justin');
//     console.log(names);
//
//     /**
//      * WHAT IS YOUR RESULT? WAS IT AN ARRAY WITH MULTIPLE NAMES IN IT? WHAT WAS THE INDEX OF PERSON 3, 8?
//      * WHAT WAS THE NUMBER OF NAMES IN THE ARRAY, AND DOES IT MATCH THE NUMBER OF NAMES PUSHED MINUS YOUR NAME?
//      * IF NOT, WHY?
//      */
//
//
//     /**
//      * TODO:
//      * Create a log statement that will log the number of elements in the names
//      * array. and concatenate it with the string "The number of names in this array is: ".
//      */
//
//     console.log("The number of names in this array is: " + names.length);
//
//     /**
//      * WHAT WAS YOUR RESULT? WHY DID YOU USE .LENGTH? DID THE LOG MATCH THE TOTAL NUMBER OF NAMES IN THE ARRAY? IF NOT, WHY?
//      */
//
//
//     /**
//      * TODO:
//      * Create log statements that will print each of the names individually by
//      * accessing each element's index. Concatenate it with "This name is " and the name in each index.
//      */
//
//     console.log("This name is " +names[0]);
//     console.log("This name is " +names[1]);
//     console.log("This name is " +names[2]);
//     console.log("This name is " +names[3]);
//     console.log("This name is " +names[4]);
//     console.log("This name is " +names[5]);
//     console.log("This name is " +names[6]);
//
//     /**
//      * WHAT WAS YOUR RESULT? HOW COULD YOU FIND THE INDEX OF THE ARRAY IF YOU DIDN'T KNOW HOW MANY NAMES IT CONTAINED?
//      */
//
//
//
//     /**
//      * TODO:
//      * Write some code that uses a for loop to log every item in the names
//      * array.
//      */
//
//     /**
//      * TODO:
//      * Refactor your above code to use a `forEach` loop
//      */
//
//     /**
//      * TODO:
//      * Create the following three functions, each will accept an array and
//      * return an an element from it
//      * - first: returns the first item in the array
//      * - second: returns the second item in the array
//      * - last: returns the last item in the array
//      *
//      * Example:
//      *  > first([1, 2, 3, 4, 5]) // returns 1
//      *  > second([1, 2, 3, 4, 5]) // returns 2
//      *  > last([1, 2, 3, 4, 5]) // return 5
//      */
//
// })();

let dogs = [
    {
        name:"Annie",
        age: 3,
        breed: "labradoodle",
        sex: "female",
    },
    {
        name: "Roxanne",
        age: 7,
        breed: "Cocker Spaniel",
        sex: "female",
    },
    {
        name:"Roscoe",
        age: 5,
        breed: "American Pit-Bull",
        sex: "male",
        nobleHound: true,
    },
    {
        name:"Frisky",
        age: 6,
        breed: "German Shepard",
        sex: "male"
    },
    {
        name:"Pookie",
        age: 2,
        breed: "American Pit-Bull",
        sex: "female",
    },
    {
        name:"Snoopadoop",
        age: 2,
        breed: "Cockapoo",
        nobleHound: true,
        sex: "female",
    },

];

// write a function that receives an array of animals
// loops over them, and writes out the ones that
// satisfy a condition, like females, or a certain age or older,
// or all noble hounds


// function callHound(animals){
//
//     for(var i = 0; i < animals.length; i++){
//         if(animals[i].nobleHound){
//             console.log(animals[i].name + ", "+ animals[i].breed)
//         }
//     }
// }
//
// callHound(dogs);


// function getSecondLargest(nums) {
//     var largestNum = 0;
//     var secondLargest = 0;
//     for (var i = 0; i < nums.length; i++) {
//         if (largestNum <= nums[i]) {
//             secondLargest = largestNum;
//             largestNum = nums[i];
//         } else if (secondLargest < nums[i]) {
//             secondLargest = nums[i];
//         }
//     }
//     return secondLargest;
// }


// var car={
//     make: "Jaguar",
//     model: "XFR-S Sportbrake",
//     year: "2019",
//     color: "Majestic Royal Blue",
//     engine: {
//         capacity: "2995 cc",
//         horsepower: "380",
//         transmission: "Eight-Speed ZF 8HP70",
//         acceleration: "5.3 sec (0-60)",
//     } ,
//     accelerate: flevel){
//     this.speed+= level*3};
//     brake: f(level){
//         this.speed-= level*5};
//
//     speed: "220 mph (limited)",
//     honk: f(
//         console.log("MOOOOVEE B, Get out the way!!!!")
//     ),
//     price: "71215",
// }


// //RECURSIVE PUSHUP USING FACTORIAL
//
// function factorial(n){
//     if (n == 0){
//         return 1;
//     }else {
//         return factorial(n - 1) * n;
//     }
// }
// console.log(factorial(12));
//
// /** factorial(7) = 5040
// * return factorial(6) * 7; -> 720 * 7 -> 5040
// * return factorial(5) * 6; -> 120* 6 -> 720
// * return factorial(4) * 5; -> 24 * 5 -> 120
// * return factorial(3) * 4; -> 6 * 4 -> 24
// * return factorial(2) * 3; -> 2 * 3 -> 6
// * return factorial(1) * 2; -> 1 * 2 -> 2
// * return factorial(0) * 1; -> 1 * 1 -> 1
// */