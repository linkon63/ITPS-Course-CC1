// // ✅✅✅ topic 29 : variable scope

// es 5 : var

// es 6 : const -> you cant change this value, let-> you can change this value

// const num = 10
// let num = 10
// num = num + 10;
// console.log("Num : ", num)

// // ✅✅✅ topic 28 : function scope
// lexical scope in javascript
// let n = 10 // global scope

// arrow function
// const arrowFunction = () => {
//     // local scope
//     let n = 20
//     console.log("Inside N:", n)
// }

// console.log("Outside N:", n)
// arrowFunction()

// function aF() {
//     // statement

// }


// // ✅✅✅ topic 27 : error solving / bug fixing
// (a) Syntax Errors, (b) Runtime Errors, and (c) Logical Errors.
// (a) Syntax Errors
// console.log("hello"
//(b) Runtime Errors
// window.printme()

// let a = 10

//     // ternary operator
//     a < 9 ? console.log("Hello") : console.log("Hi")

// // (if = ?) and (: else)


// // ✅✅✅ topic 30 : build in functions

const array = [52, 36, 9, 5, 564, 5, 4, 45, 5, 4, 78, 7]

// const findValue = array.includes(564)
const findValue = array.find((a) => a == 000)
// console.log("Value found : ", findValue)
// array.map((a, index) => (
//     console.log(index, " : ", a)
// ))

// console.log("Value found : ", findValue)

// conventional way
// const filteredValues = array.filter(
//     function (a) {
//         return a == 5
//     }
// )

// new way
// const filteredValues = array.filter((a) => a != 5)
// console.log("filteredValues : ", filteredValues)

// console.log(array.indexOf(36))


// Home task : 


/*
-
1. You have an array of object 
like -> users = [
    {name : "Javascript", age : 10, password: 1000},
    {name : "Javascript", age : 10, password: 1000},
    {name : "Javascript", age : 10, password: 1000},
    {name : "Javascript", age : 10, password: 1000},
    {name : "Javascript", age : 10, password: 1000},
]
    // using for loop make random 10 users

2. using arrow give params as a "name" and "password" 
    and return the value and print this

3. using array build function delete the 3rd 
    and 4th value of this array. -> own task
[1,2,3,6,5,4,5]
|...
[1,2,3,4,5]

4. then print the new array using map


    */



