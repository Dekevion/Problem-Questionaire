    // var counterOne = 0;
    //
    // while (counterOne < 10) {
    // console.log(counterOne);
    // counterOne ++
    // }

// while vs for loops


    // var whileLoop = 10; // starting point
    //
    // while (whileLoop > 0) {
    // console.log(whileLoop);
    // a--;
    // }

// this loop will stop at 1 because it is greater than 0
// meaning WHILE VARIABLE A IS TRUE, RUN THE LOOP. WHEN IT BECOMES FALSE
// DISCONTINUE THE LOOP
//
// For loops continued with for loops variable declaration is

// inside the parenthesis, so is the starting point, and how much
// the loop goes up by
//     for (var forloop = 0; forloop <= 5; forloop++) {
//         if (forloop === 5) {
//             console.log("five");
//         } else if ( forloop === 4) {
//             console.log("four");
//         } else {
//             console.log(forloop);
//         }
//     }

    // Press "q" to quit

    //
    // var input = ""; // QUIT THE FUNCTION WHEN INPUT EQUALS Q
    // while (input !=="q") {
    //     input = prompt("press 1 to count, 2 to calc, and enter q to quit"); // ask again!!!
    //
    //     if (input === "1") {
    //       var x = prompt("Count by ones or twos?")
    //         if(input==="ones") {
    //
    //             var e = parseInt(prompt("enter a number"));
    //             var f = 1;
    //             while (f < e) {
    //                 f = f + 1;
    //                 alert(f);
    //                 console.log(f)
    //             }
    //         }
    //     } else if (input === "two"){
    //         alert("yay");
    //     }
    //
    //
    //     else    if (input ==="2") {
    //       var z = prompt("Press 'a' for add and 's' for subtraction");
    //       if(z ==="a") {
    //           var a = parseInt(prompt("Enter number"));
    //
    //           var b = parseInt(prompt("Enter number"));
    //           var add = alert(a + b);
    //           console.log(add)
    //       } else if (z === "s") {
    //           var sub = parseInt(prompt("Enter number"));
    //           var sub1 = parseInt(prompt("Enter number"));
    //           var subtract = alert(sub - sub1);
    //           console.log(subtract);
    //       }
    //     }
    //

    // if (input === '1'&& "ones") {
    //
    //     var e = parseInt(prompt("enter a number"));
    //     var f = 1;
    //     while (f < e) {
    //         f = f + 1;
    //         alert(f);
    //         console.log(f)
    //     }
    // } else if (input === "twos") {
    //     var e = parseInt(prompt("enter a number"));
    //     while (f < e) {
    //         f = f + 2;
    //         alert(f);
    //         console.log(f);
    //     }
    //}


//}



/*
Friday, August 16, practice/Review
if you need an updated or changed array use map, otherwise use foreach
for in, or for loop
MAP CHANGES THE VALUES WITHIN THE ARRAY WITH RETURN;
 */
// let array1 = [1,2,3,4];
//
// let array1 = array1.map
// (function (element) {
//     return(eachElement + 1)
// });


// Weekend/ Udemy practice
//functions
// function  checkDriverAge(age) {
//    let a = parseInt(prompt("What is your age?"));
//     {
//
//         if (a < 18) {
//             alert("Sorry, you are too young to drive this car. Powering off");
//         } else if (a > 18) {
//             alert("Powering On. Enjoy the ride!");
//         } else if (a === 18) {
//             alert("Congratulations on your first year of driving. Enjoy the ride!");
//         }
//     }
// }

//checkDriverAge();
//function with more than one parameter
// function addThreeNum(a,b,c) { //a b c are parameters
//     alert(a + b + c);
// }
//
// addThreeNum(2, 3,  5); // DID IT ON ME OWN

    // ARRAYS

    // var list = ['a','b','c'];
    // console.log(list[0]);
    // var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
    // array2[1][1][0];

// objects
//     var user = {
//         name: "Dekevion",
//         age: 20,
//         spells: ['a','b'],
//         shout: function () {
//             alert("Shout");
//         }
//     };
//     console.log(user);
//
//     var otherList = [
//         {
//             username: "Dekevion",
//             password: "Secret",
//         },
//
//     ];
//     console.log(otherList);
//
//     var userObject = {
//         username: "Dekevion1",
//         password: "Secret",
//     };
//
//     var ObjectWithinArray = [
//        {
//         username: "Dekevion1",
//         password: "Secret",
//        }
//
//     ];
//
//     var newsFeed = [
//         {
//             username:'Ekko',
//             timeline:'Log',
//         },
//         {
//             username:'Jimmy',
//             timeline:'nog'
//         },
//         {
//             username:'Hemmy',
//             timeline:'Semi',
//         },
//
//
//     ];
//     console.log(newsFeed);

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
    // if the information stored in usernameprompt and pword prompt match whats in the database show them the newsfeed


    //Loops
    // var todos = [
    //     "clean",
    //     "brush teeth",
    //     'exercise',
    //     'eat',
    // ];
//     for (var i = 0; i < todos.length; i++) {
//         todos[i] = todos[i] + "!";
//     }
// // FOR LOOP
//     var todosLength = todos.length; //
//     for (var i = 0; i < todos.length; i++) {
//         todos.pop();
//     } // this will remove all of the chores in the list;
//
// // FOR LOOP
//     var counterOne = 0; // start at 0/ 10 is = to 10 not less than
//     while (counterOne < 10) { // stop at 10 because this makes the condition false
//         console.log(counterOne);//which stops the program
//         counterOne++; // go up by one
//     }
// // WHILE LOOP

//     var counterTwo = 10; // start at 10
//     while (counterTwo > 0) { // while 10 is greater than 0 go down by 1;
//         console.log (counterTwo);
//         counterTwo--; // go down by 1
//     }


// DO WHILE LOOP

    // var counterThree = 10;
    // do {
    //     console.log(counterThree); // logs first and checks condition later
    //     counterThree--;
    // }   while(counterThree > 0);


    // FOR EACH


    //Ternary Operator (Turn this into one)
//
//     function experiencePoints() {
//         if (winBattle()) {
//             return 10;
//         } else {
//             return 1;
//         }
//     }
// function win(bool) {
//     return bool
// }
//
// var win1 = win(true) ? "Return 10" : 'Return 1';
//
//     console.log(win1)

    //LET AND CONST
    //---------------------------------------------------------
    // const player = 'bob';
    // let exp = 100;
    // let hisLevel = false;
    //
    // if (exp > 90){
    //     let hisLevel = true;
    // }
    //---------------------------------------------------
    // const multiply = (a,b) => a * b;
    // const curriedMultiply = (a) => (b) => a * b;
    // const multiplyBy5 = curriedMultiply(5);
    //-----------------------------
    // const array = [1,2,3,4];



    // FOREACH
    // const double = [];
    // const newArray = array.forEach((num)) => {
    //     double.push(num * 2);
    // }
    //-----------------------------------------
    //
    array = [2,4,6]
    // MAP-------------------------------------------
    // const mapArray = array.map(num => num * 2);
    // console.log('map',mapArray)
    //
    // function mapFunc(item, idx) {
    //     return  `${idx + 1}. ${item + 5}`
    // }
    //
    // let list = [1,2,4]
    //
    // let newList = list.map(mapFunc)
    // console.log(newList)
//
// // FILTER-----------------------------------------------
//     const filterArray = array.filter(num => num > 5);
//
//     console.log('num', filterArray)
//
//     const otherway = array.filter(num => {
//         return num < 5
//     });
//
//     console.log('other', otherway)
//
//
//     const reduceArray = array.reduce((acc, num) =>{
//        return acc + num
//     }, );
//
//     console.log('reduce', reduceArray)
//
//     const array2 = [
//         {
//             username: "john",
//             team: "red",
//             score: 5,
//             items: ["ball", "book", "pen"]
//         },
//         {
//             username: "becky",
//             team: "blue",
//             score: 10,
//             items: ["tape", "backpack", "pen"]
//         },
//         {
//             username: "susy",
//             team: "red",
//             score: 55,
//             items: ["ball", "eraser", "pen"]
//         },
//         {
//             username: "tyson",
//             team: "green",
//             score: 1,
//             items: ["book", "pen"]
//         },
//
//     ];
// //--------------------------------------------FOR EACH
//     const double = [];
//     const newArray = array.forEach((num) => {
//         double.push(num * 2);
//     })
//     console.log(double)
// //------------------------------------------ FOR EACH
//     empt = []
//     array2.forEach(user => {
//         let {username} = user;
//         username = username + '!';
//         empt.push(username);
//     })
//
//     console.log(empt)


//-----------------------MAP
//
//     const map2 = array2.map (user => {
//         let {username} = user;
//         return username + "?"
//     })
//     console.log(map2)
//     // const filterArray = array.filter(num => num > 5);
//     // FILTER
//     const filterArray2 = array2.filter(user => {
//         return user.team === "red";
//     })
//     console.log(filterArray2);
//
//
//     const total = array2.reduce((acc, user) => {
//         return acc + user.score
//     }, 0);
//     console.log(total);


    // OCTOBER 31ST

    const letters = ['A','B','C','D','E'];
    const detailedLetters = {
        apples: 5,
        oranges: 10,
        grapes: 1000,
    };
    // for loop

    for (let i = 0; i < letters.length; i++){
        console.log('For Loop: ' + letters[i])
    }


    // for each

    letters.forEach(element_in_array => {
        console.log('For Each: ' + element_in_array)
    });

    // for of - iterating arrays, strings
    for (item of letters) {
        console.log("of: " + item);
    }

    //for in - properties
    // enumerating

    for (item in detailedLetters) {
        console.log("in: " + item)
    }