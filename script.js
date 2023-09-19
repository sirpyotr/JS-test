// let name
// let admin
// name = "John"
// admin = name
// alert(admin)
// let currentVisitor
// let planetEarth

// let userName = prompt("Who's there?", '');

// if (userName === "Admin") {
//     let pass = prompt("Enter password", '');
//     if (pass === "TheMaster") {
//         alert("Welcome");
//         }else if (pass === '' || pass === null) {
//             alert("Canceled");
//         } else {
//             alert("Wrong password");
//         }

// } else if (userName === '' || userName === null) {
//         alert("Canceled")
// } else {
//         alert("I don't know you");
// }

// let codeName = prompt('What is the "official name" of Javascript?', "");

// if (codeName === "ECMAScript") {
//     alert("Correct!")
// } else {
//     alert("You don\’t know? ECMAScript!")
// }

// // Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

// let num = prompt("Please, enter your number", "");

// if (num > 0){
//     alert("1")
// } else if (num < 0){
//     alert("-1")
// } else {
//     alert("0")
// }

// Rewrite this if using the conditional operator '?':

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// let result = (a + b < 4) ?
//     'Below':
//     'Over';

// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message;

// message = (login == 'Employee') ? 'Hello' :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login':
//   '';

// Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// Rewrite the code below using a single switch statement:

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// let a = +prompt("a?", "");

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert(2, 3);
//     break;
//   default:
//     break;
// }

// function checkAge(age) {
//     return age > 18 ? true : confirm("Did your parents allow you?");
//   }

// function checkAge(age) {
//     return (age>18) || confirm("Did your parents allow you?");
// }

// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// function min(a, b) {
//   return a < b || b < a;
// }

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// function min(a, b) {
//     return a < b ? a : b;
// }
// min(2, 5) == 2;
// min(3, -1) == -1;
// min(1, 1) == 1;

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// function pow(x, n) {
//     if (n > 1) {
//         alert(x ** n);
//     } else {
//         alert("you can only enter a number greater than 1")
//     }
// }

// pow(prompt("x?"), prompt("n?"))

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Do you agree?",
//    function() {alert("You agreed.")},
//    function() {alert("You canceled the execution.")}
//   );

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     () =>  alert("You agreed."),
//     () =>  alert("You canceled the execution.")
//   );

// Write a function called add7 that takes one number and returns that number + 7.
// Write a function called multiply that takes 2 numbers and returns their product.
// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

// // function add7(n){
// //     return n + 7
// // }

// console.log(add7(4))

// let multiply = (a, b) => a * b;

// function capitalize(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        // return string[0].toUpperCase() + string.slice(1).toLowerCase();
// }

function lastLetter(string) {
    return string.charAt(string.length - 1)
}

