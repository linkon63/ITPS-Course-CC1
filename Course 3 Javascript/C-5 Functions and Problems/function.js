// home task 3 : you have to dec: 2d array like
// arr = [[1, 10, 20], [50, 20, 60, 40, 30], [6, 3, 5], [200, 600]]
// find there is 200 in this array using for loop and you have to find the index number
// note : floor number and room num

// // ✅✅✅ topic 24 : Problem solving
// var arr = [[1, 10, 20], [50, 20, 60, 40, 30], [6, 3, 5], [200, 600]]

// for (let i = 0; i < arr.length; i++) {
//     var rooms = arr[i];
//     for (let j = 0; j < rooms.length; j++) {
//         var roomNumber = rooms[j];
//         // es5 -> ecma script version
//         if (roomNumber == 200) {
//             console.log("i->Floor : ", i, " j->Room :", j)
//             break;
//         }
//     }
// }


// console.log("You are 200 from array : ", arr[3][0])

// assume that you have a array like this
// [[1, 10, 20], [50, 20, 60, 40, 30], [6, 3, 5], [200, 600]]
// and you have make 1 array using for loop
//
/// [1, 10, 20, 50, 20, 60, 40, 30, 6, 3, 5, 200, 600] // floated array
/// 1. use for loop
/// 2. use array push method
///
/*
1. for loop
2. while
3. do while
*/


// // ✅✅✅ topic 25 : variable scope
// // ✅✅✅ topic 25 : function scope
// // ✅✅✅ topic 27 : error solving / bug fixing

// // ✅✅✅ topic 26 : function

/*
    functions -> build and user define


*/


// function square(number) {
//     return number * number;
// }

// var notSquareNumber = 10 // in cpp -> not_square_number
// var squareNumber = square(notSquareNumber)
// console.log("Got value : ", squareNumber)


// function updateObject(object) {
//     object.name = "Im js";
// }
// var obj = { name: "javascript", age: 10 }
// console.log("Before Calling functions", obj)
// updateObject(obj)
// console.log("After Calling functions", obj)

var num = function () {
    return 2;
}

console.log("Number:", num())

