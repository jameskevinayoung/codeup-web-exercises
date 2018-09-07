"use strict";


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];





//TODO Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

//initial approach with for loop worked
// let languages  = [];

// for (let i = 0; i < users.length; i++){
//     if(users[i].languages.length > 2){
//         languages.push(users[i]);
//     }
// }
// console.log(languages);




//filter approach ; make sure you put the .length after languages property

// let languages = users.filter(function(user){
//  return user.languages.length > 2;
//
// });
// console.log(languages);


//filter approach as an arrow function;

let languages = users.filter(user => user.languages.length >2);

console.log(languages);

//TODO Use .map to create an array of strings where each element is a user's email address


//initial approach; forEach method

// let emailArray = [];
//
// users.forEach(function(user){
//
//     emailArray.push(user.email);
// });



//map approach; do not use .length with the email property because you are not including the length of characters in email

// let emailArray = users.map(function(user){
//     return user.email;
// });
//


//map approach as an arrow function
let emailArray = users.map(user=>user.email);
console.log(emailArray);


// TODO Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

//initial approach with a forEach;
//
//
// make the variable === 0 run a forEach to iterate

// let yearsOfXP = 0;
//
// users.forEach(function(user){
//    yearsOfXP += user.yearsOfExperience/users.length;
// });


//reduce method;

// yearsOfXP will hold the value of the reduce method


// let yearsOfXP = users.reduce(function(total, user){ //total represents sum, user represents each index
//         return total += user.yearsOfExperience/users.length; //total adds each user's years of Experience property; divide by length
// },0);//the zero provides the initial value of yearsOfXP to add to;


//reduce method as an arrow function;

let yearsOfXP = users.reduce((total,user)=>{return total += user.yearsOfExperience/users.length;},0);

console.log(yearsOfXP);
