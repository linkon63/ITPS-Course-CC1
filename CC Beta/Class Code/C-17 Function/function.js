
/// return type function
function sub(num1, num2) {
    return num1 - num2
}
// arrow function
const x = () => {
    return 10
}
console.log("x", x())
// anynomous function

// argument type function 

// void function // no return type function
function add(x, y) {
    console.log(x + y)
}

add(10, 20)
add(30, 56)
add(2, 3)

const cal = sub(5, 3) // 2
console.log(cal);


const mul = (x, y) => {
    return x * y
}

console.log(mul(2,3))
