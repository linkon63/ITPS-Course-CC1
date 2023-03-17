console.log("index.js file open")

// ✅✅✅ topic 6 : Numbers in js

var num1 = 1236.222 // float numbers
var num2 = 152 // int 
var num3 = 2;
var negativeNum = -256.336

// console.log("abs        : ", Math.abs(negativeNum)) /// negative to positive
// console.log("power      : ", Math.pow(10, 9)) /// negative to positive
// console.log("ceil       : ", Math.ceil(2.1))
// console.log("floor      : ", Math.floor(10.9))
// console.log("min        : ", Math.min(-10.9, 100, 36, 56, 86))
// console.log("max        : ", Math.max(-10.9, 100, 36, 56, 86))
// console.log("random     : ", Math.floor(Math.random() * 6) + 1)
// console.log("sqrt       : ", Math.sqrt(2)) sq = squire and rt = root


// ✅✅✅ topic 7 : Conversion Numbers in js
var stringNum = '12'
var stringNum2 = '34'

var result = stringNum + stringNum2 // string concatenation
var rst = Number(stringNum) + Number(stringNum2) // convert number and add

// short hand type conversion 
var r = (+stringNum) + (+stringNum2) // number and type = number

var rS = String(r) // convert number to string 

var sRs = r + "" // short hand command of string conversion


// short hand command -> i++ => i = i+1;

console.log("Type of var : ", typeof (result), "    -> ", result)
console.log("Type of var : ", typeof (rst), "       -> ", rst)
console.log("Type of var : ", typeof (r), "         -> ", r)
console.log("Type of var : ", typeof (rS), "         -> ", rS)
console.log("Type of var sRs : ", typeof (sRs), "         -> ", sRs)







