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

// let dogs = [
//     {
//         name:"Annie",
//         age: 3,
//         breed: "labradoodle",
//         sex: "female",
//     },
//     {
//         name: "Roxanne",
//         age: 7,
//         breed: "Cocker Spaniel",
//         sex: "female",
//     },
//     {
//         name:"Roscoe",
//         age: 5,
//         breed: "American Pit-Bull",
//         sex: "male",
//         nobleHound: true,
//     },
//     {
//         name:"Frisky",
//         age: 6,
//         breed: "German Shepard",
//         sex: "male"
//     },
//     {
//         name:"Pookie",
//         age: 2,
//         breed: "American Pit-Bull",
//         sex: "female",
//     },
//     {
//         name:"Snoopadoop",
//         age: 2,
//         breed: "Cockapoo",
//         nobleHound: true,
//         sex: "female",
//     },
//
// ];

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



//PUSH UP SEPT 11,2018 map/filter/reduce practice and forEach

//USE MAP

// let dogAges = dogs.map(dog => dog.age);
//
// console.log(dogAges);
//
// //USE FILTER
//
// let nobleBreeds = dogs.filter(dog => dog.nobleHound);
//
// console.log(nobleBreeds);
//
// //USE REDUCE
//
// let averageDogAge = dogs.reduce((total, dog) =>{
//
//     return total + dog.age/dogs.length;
//
// }, 0);
//
// console.log(parseInt(averageDogAge));
//
// //USE FOREACH

// function fibonacci (number){
//     let array = [1,1];
//     for(let i = 1; i<number - 1; i++){
//        array.push(array[i] + array[i-1]);
//     }
//     return array;
// }
// console.log(fibonacci(10));
/**
 *
 *
 *
 *
 * */

// let getFibonacci = n => { //function that takes a number and returns the fibonacci sequence
//     let fibArray = [1,1]; //initialize array with the first two indexes [0,1], but since the index
//     for(let i =1 ; i < n-1;i++){ //use loop to increment the sequence beginning with i = 1 because it was the last index of the array
//         //i will increment while it is less than the parameter - 1,because index starts at 0
//         fibArray.push(fibArray[i] + fibArray[i-1]) //push the current i index plus the index of i - 1 (the previous index) to array
//     }
//     return fibArray; //return the array
// }
//
//
// console.log(getFibonacci(10));





//function prime number, receives a number parameter
//determines the number is prime or not

//how to figure out a prime number
/**
 * prime number is divisible by itself and one
 *find out the factors that make up the number
 * if the factors are two  numbers the number is prime
* */

// function isPrime(num){
//     for(var i = 2; i < num; i++) {
//         if(num % i === 0) {
//             return false;
//         }
//     }
//     return true;
//
// }
//
// console.log(" is prime? " + isPrime(15));
// console.log(" is prime? " + isPrime(7));
// console.log(" is prime? " + isPrime(3));
// console.log(" is prime? " + isPrime(5));
// console.log(" is prime? " + isPrime(1234567891234567891));


// const movies =[
//     {
//         name: 'Hercules',
//         price: 3.50
//     },
//     {
//         name: 'Little Mermaid',
//         price: 5.00
//     },
//     {
//         name: 'Brother Bear',
//         price: 7.50
//     }
// ]
//
// function totalCost(array,day){
//     let priceTotal = 0;
//
//     array.forEach(function(movie){
//         priceTotal += movie.price * day;
//
//     });
//     return priceTotal;
//
// }
//
// console.log(totalCost(movies, 5));


// CSS Color Names
// Compiled by @bobspace.
//
// A javascript array containing all of the color names listed in the CSS Spec.
// The full list can be found here: http://www.w3schools.com/cssref/css_colornames.asp
// Use it as you please, 'cuz you can't, like, own a color, man.

// var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
//
//
//
// Collapse 


//create a function that receives an array of numbers and returns an array in ascending order


// function sortArray(array){
//     let numArray = [];
//
//     for(let i = 0; i < array.length; i++){
//         let smallest= array[0];
//         if (i < array[i]){
//             smallest = i;
//             numArray.push(smallest)
//         }
//     }
//
//
// }
//
//
// sortArray([4,6,2,8,1,9,7,3])



// function FizzyBuzz(n){
//
//     for(let i = 1; i<= n; i++){
//         if(i%15 === 0){console.log("FIZZBUZZ");}
//         else if (i% 5 === 0){console.log("buzz");}
//         else if (i% 3 === 0){console.log("fizz");}
//         else{console.log(i);}
//     }
//
// }
//
// FizzyBuzz(100);