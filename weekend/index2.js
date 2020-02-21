//Simplified facebook

//     var database = [
//
//         {
//             username: "andy",
//             password: "a",
//         },
//         ];
//
//         var newsFeed = [
//
//
//     {
//         username: "Bob",
//         timeline: 'tired',
//     },
//
//             {
//                 username: 'Sal',
//                 timeline: 'up',
//             },
//
//
// ];
//
//         var userNamePrompt = prompt("What is your username");
//         var passwordPrompt = prompt("What is your password");
//
//         function signIn(user, pass) { // 2 parameters === arguments
//
//             if (user === database[0].username &&
//                 pass === database[0].password) {
//                     console.log(newsFeed);
//             } else {
//                 alert("Wrong info");
//             }
//
//
//         }
//
//         signIn(userNamePrompt, passwordPrompt); // whenever you have parameters you need arguments too
//if the information stored in usernameprompt and pword prompt match whats in the database show them the newsfeed

const companies = [
    {name: 'Company 1', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company 2', category: 'Retail', start: 1992, end: 2005},
    {name: 'Company 3', category: 'Auto', start: 1999, end: 2006},
    {name: 'Company 4', category: 'Retail', start:2000, end: 2017},
]

const ages = [33,12,20,16,5,54,44,61,15,20,60,22,21]
// FOR
// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]); // console log each company and pluck out the current index with i
// }

//FOREACH

// companies.forEach(function (company) {
//     console.log(company)
// });

//FILTER

// let canDrink = [];
//
// for(let i =0; i <ages.length; i++){  // USE [i] for anything.length
//     if(ages[i] >= 21){
//         canDrink.push(ages[i])
//     }
// }

// const canDrink = ages.filter(function (age) {
//     if(age >= 21){
//         return true
//     }
// });
// console.log(canDrink);

