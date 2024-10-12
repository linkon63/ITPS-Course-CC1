// #1. variables #################################
// console.log("Hello JS !! ?? Everyone !");
// int string char float

// let a = 10; // int // it is changeable variable
// const b = 20; // it is not changeable variable
// console.log("A : ",a + " B:" + b + "")

// a = "String" // string
// console.log("A : ",a + " B:" + b + "")
// a = 5636.5445 // float
// console.log("A : ",a + " B:" + b + "")
// a = false // boolean variable
// console.log("A : ",a + " B:" + b + "")

// 2. data types #################################
// let name = "mr js"
// let crimeRecord = false
// let salary
// let age = 24.5
// let presentAddress = null
// const paramentAddress = "Web"

// console.log("name : ",name, typeof(name))
// console.log("crimeRecord:",crimeRecord, typeof(crimeRecord))
// console.log("salary:",salary, typeof(salary))
// console.log("age:",age, typeof(age))
// console.log("presentAddress:",presentAddress, typeof(presentAddress))
// console.log("paramentAddress:",paramentAddress, typeof(paramentAddress))
// 3. JAVASCRIPT OPERATORS #################################
// Arithmetic Operators
// + - * / %
// let a = 10
// let b = 20

// const plus = a + b
// const minus = a - b
// const multi = a * b
// const div = a / b
// const mod = a % b

// console.log("plus : " + plus, "minus : " + minus, "multi : " + multi, "div : " + div, "mod:", mod)

// Assignment Operators
// = += -= *= /= %=

// let a = 10
// console.log(a)
// a += 20; //short hand command // a = a + 20 // op : 10 + 20 = 30
// console.log(a)
// a -= 5; // a = a - 5 // op : 30-5 = 25
// console.log(a)
// a *= 2; // a = a * 5 // op : 25*1 = 50
// console.log(a)
// a /= 2; // a = a / 2 // op : 50/2 = 25
// console.log(a)
// a %= 10; // a = a%10 // op : 25%10 = 5
// console.log(a)

// Comparison Operators
// let a = '10',
//     b = 20;

// console.log(a >= b);  // false
// console.log(a == 10); // true
// console.log(a === 10); // false

// console.log(a != b) //
// Logical Operators

// && (Logical AND)
// || (Logical OR)
// ! (Logical NOT)
// let password = false, cPassword = true

// if (!password) {
//     console.log("Access this panel")
// } else {
//     console.log("You are not allowed to access this panel")
// }

// if( password  || cPassword ){
//     console.log("Access this panel")
// }else{
//     console.log("You are not allowed to access this panel")
// }

// if( password  && cPassword ){
//     console.log("Access this panel")
// }else{
//     console.log("You are not allowed to access this panel")
// }

// Logical Assignment Operators
// Nullish Coalescing Operator
// || or work with undefined null and false arguments
// let a = null || "default value"
// //  ?? nullish work with undefined null arguments
// console.log(" a is : " + a)
// Exponentiation Operator
// let a = 10
// a = a ** 3
// let b = Math.
// console.log(" a is : " + a)
// console.log(" b is : " + b)

// 4. loops
// for while do while foreeach loop map
// let count = 1;
// while (count < 10) {
//     console.log(count);
//     count +=2;
// }

// for (initializer; condition; iterator) {
//     // statements
// }

// let a = 10
// console.log(a)
// ++a
// console.log(a)
// a++
// console.log(a)
// for (var i=1; i<=10; i++) {
//     console.log(i);
//   }

// var i = 42;
// console.log(i++); // shows 42
// console.log(i); // shows 43
// i = 42;
// console.log(++i); // shows 43
// console.log(i); // shows 43

// let i = 1;
// do {
//     console.log("The number is " + i);
//     ++i;
// }
// while (i <= 10);

// 5. Number
// const a = 10
// const convertedNumber = +"106396"
// const convertedNumber2 = Number("hello")

// console.log("a:",a, "type of a:", typeof(a), " - convertedNumber:", convertedNumber, "type of convertedNumber:", typeof(convertedNumber));
// console.log(convertedNumber2)
// 6. Sting

// const string1 = "A string primitive";
// const string2 = 'Also a string primitive';
// const string3 = `Yet another string primitive`;

// console.log(string1, string2, string3);

// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log("real   : ",str);
// console.log("update : ",str.replace("fox", "dog"))
// const str2 = 12+""
// const str3 = String(1236)
// console.log(str2, str3);
// console.log("Upper case : ", str.toUpperCase())
// console.log("Lower case : ", str.toLowerCase())

// console.log(str.slice(31));
// Expected output: "the lazy dog."
// const token = "X_CSRF_TOKEN"
// console.log(token.slice(2, 4));
// Expected output: "quick brown fox"

// console.log(str.slice(-4));
// // Expected output: "dog."

// console.log(str.slice(-9, -5));

// 7. Object Array
const obj1 = {
    name: "john",
    age: 34,
    salary: 100,
    isActiveEmp: true,
}
const obj2 = {
    name: "Ronaldo",
    age: 42,
    salary: 500,
    isActiveEmp: false,
}
// const totalSalary = obj1.salary + obj2.salary
// console.log("Total Salary : ",totalSalary)
// if(obj1.salary > obj2.salary){
//     console.log("Salary obj1 is bigger than obj2");
// }else{
//     console.log("Salary obj2 is bigger than obj1");
// }

const number = [1, 2, 3, 4, 5]

let total = 0
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    total += element
}
// console.log(number)
// number.push(total)
// console.log(number)
// number.push(12)
// console.log(number)
// number.push(693)
// number.push(0)
// number.push(23)
// console.log(number)
// number.pop()
// number.pop()
// number.pop()
// console.log(number)

// number.unshift(-2,-1,0)
// // number.unshift(-1)
// // number.unshift(-2)

// console.log(number)

// max value in array min value in array
// const objectArray = [{ name: "Honda", price: 10 }, { name: "Suzuki", price: 12 }, { name: "Yamaha", price: 15 }]
// // console.log(objectArray)
// const result = objectArray.filter((singleObj) => singleObj.price === 10);
// console.log(result)

// const array1 = [5, 0, 8, 130, 44];

// const found = array1.find((element) => element > 10);

// console.log(found);

// const stringObject = ["Honda", "Suzuki", "Yamaha", "R15"]
// const find = stringObject.find((element) => element == "55");
// console.log(find);

// const aArray = [{ name: "Honda", price: 12 }, 10, "Hello World", true, false, 36.5]

// aArray.map( (singleEl) => {
//     console.log(singleEl)
// })


// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

// const values = [1, 10, 21, 2];
// const sortedValues = values.sort((a, b) => a - b);
// console.log(sortedValues)


// 8. function 
// return no return

// vaiPrintKor("Hello world!");
// vaiPrintKor(vaiJugKor(30,220))
// vaiPrintKor(vaiGunKor(30,10))
// vaiArrayTakePrintKoreDay([1,2,36,15,65,50])
// vaiArrayTakeJugKoreDay([1,2,36,15,65,50])


// function vaiPrintKor(str){
//     console.log(str);
// }

// function vaiJugKor(num1,num2){
//     return num1 + num2
// }
// function vaiGunKor(num1,num2){
//     return num1 * num2
// }

// function vaiArrayTakePrintKoreDay(array){
//     array.map(arr => {
//         vaiPrintKor(arr)
//     })
// }

// function vaiArrayTakeJugKoreDay(array){
//     let total = 0
//     array.map(arr => {
//         total += arr
//     })
//     vaiPrintKor(total)
// }


// const add = (p1,p2) => {
//     console.log(p1+p2);
// }
// console.log(add(10,63))

// any-n function

// 9 asynchronous javascript

// console.log("1st")
// setTimeout(() => {
//     console.log("2nd Delayed for 1 second.");
//   }, 3000);
// console.log("3rd")

  // set interval
//   setInterval(() => {
//     console.log("I love you!");
//   }, 2000);

// promise -> api



