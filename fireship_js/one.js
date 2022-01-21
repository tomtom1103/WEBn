console.log('hello')

/*
multiline comment
*/

//datatypes
//7 datatypes - undefined, null, boolean, string, symbol, number, object
//symbol - immutable primitive unique

var myName = "Thomas";
myName = "John";
console.log(myName);


let ourName = "tester";

const pi = 3.14;

//var can be used through the whole program
//let is only used in the scope
//const cannot be changed

var a;
var b = 2;
console.log(a)

//a is declaring, b is declaring and assigning

a = 7;
b = a;
console.log(a)

//variables are case sensitive

var myVar = 87;

myVar = myVar + 1;
myVar

myVar++
myVar
//incrementing by 1 by ++

var myVar = 11;
myVar = myVar -1;
myVar

myVar--
myVar
//decrementing by 1 by --


var a = 3;
a += 15;
a
// += like python

var firstNameLength;
var firstName = 'Tom';

firstNameLength = firstName.length;
firstNameLength;

console.log(firstName.length);
console.log(firstNameLength);

console.log(firstName[0]);

//indexing

var myStr = 'Jello World'
console.log(myStr[0])
myStr[0] = 'H'
myStr

//strings are immutable

console.log(`last character is: ${myStr[myStr.length-1]}`);

//

var ourArray = ['Tom', 25];
console.log(ourArray[0]);
ourArray[0];
//왜 콘솔로그로만 해야 나오지

function myFunc(){
    console.log('Hi')

}
myFunc();
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
function localScope(){
    var myLocal = 5;
    console.log(myLocal);
}

localScope();
//console.log(myLocal);

//local scoping. only accessible inside the function















