// console.log("APP JS RUNNING")
/**
            Array Data Structure
            <- 1,2,3,4,5,6,7,8,9,10
            a,b,c,d,e

            // linked list
            // stack
            // queue
            // deg data structure
            // dequeue
            // -> graph
                    1. tree -> 5/6
                    2.
                * bidirectional
                * bfs
                * dfs
                * circular graph
 */

// var n1 = 1
// var n2 = 2


// ✅✅✅ topic 19 : array declarations

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // single dimensional array

// console.log("Its array :", arr)

// // ✅✅✅ topic 20 : array declarations and loop / access

// console.log("Length of array :", arr.length)

// console.log("Index access : ", arr[4])

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// 

// // ✅✅✅ topic 21 : multi / 2d array declarations access
// var multiArray = [[1, 10, 20], [50, 20, 60, 40, 30], [6, 3, 5], [200, 600]]

// console.log("Floor 1 and Room 4: ", multiArray[1][5])

// // ✅✅✅ topic 22 : array basic functions
var arr = [1, 2, 3] // single dimensional array
// console.log("Before Push : ", arr)
// arr.push(4) // insert in last
// console.log("After Push : ", arr)
// arr.pop() // delete from last
// console.log("After pop : ", arr)
// arr.shift() // delete from first
// console.log("After shift : ", arr)
// arr.unshift(10) // delete from first
// console.log("After unshift : ", arr)



/*
    home task 1: you have an array of 10 values and you have to find values from array
    arr = [17, 20, 33, 46, 45, 64, 7.0, 87, 96, 107]
    if there is 96 print yes and if there is no 96 print no

    home task 2: you have an array of 10 values and you
                 have to (+add) all the numbers of this array and print the total number using while loop

    home task 3: you have to dec: 2d array like
    arr = [[1, 10, 20], [50, 20, 60, 40, 30], [6, 3, 5], [200, 600]]
    find there is 200 in this array using for loop and you have to find the index number
    note : floor number and room num

*/

// // ✅✅✅ topic 23 : object destructed // access in key and value
// var person1 = {
//     name: "Anik",
//     age: 60,
// }

// var person2 = {
//     name: "Argha",
//     age: 160,
// }

// var person3 = {
//     name: "Sobuj",
//     age: 260,
// }
// // ds method 1
// console.log("ds method 1: ", person2.name)

// const { name, age } = person3

// console.log("ds method 2 : ", name, age)

// // ✅✅✅ topic 23 : array of object


var employee = []

for (let i = 0; i < 10; i++) {
    var object = {
        name: i + "--EMP",
        age: i + 10,
        salary: (i + 1) * 1000
    }
    employee.push(object)
}

console.log("Emp", employee)
console.log("Emp 8 What is the salary : ", employee[8].salary)
console.log("Emp 8 What is the age : ", employee[8].age)



