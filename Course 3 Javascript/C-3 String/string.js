// ✅✅✅ topic 8 : Strings

/*

JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values (UTF-16 code units). Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it. You can create strings using string literals or string objects.

/// Hexadecimal = 15 -> FFFF  -> DLD - FEDS
/// -15 = -FFFF ? incorrect   -> Computer Architecture
/// Assembly language
"" -> '' -> ''' 888 '''

() = p
{} = base
[] = brk....

*/


// var name = "javascript compile just in time" // it start from 0 -> 10 means 9
// var strlen = name.length
// console.log("Index 2    : ", name[2])
// console.log("last value : ", name[9])
// console.log("last value : ", name[strlen - 1]) // unknown string
// console.log("Str len    : ", strlen);

// let it figure out later // variable scope
// const stdName = "BavaScript"
// console.log("Before rename  :", stdName)
// stdName[0] = "J"
// console.log("After rename   :", stdName)

// var a = 10
// console.log(a)
// a = 15
// console.log(a)


// ✅✅✅ topic 9 : charAt

var stdName = "hello everyone we are learning we js we";
// console.log("Length         :", stdName.length)
// console.log("charAt()       :", stdName.charAt(6))

// ✅✅✅ topic 10 : indexOf
// console.log("indexOf()       :", stdName.indexOf('z'))
// console.log("indexOf()     :", stdName.indexOf('we'))

// ✅✅✅ topic 11 : lastIndexOf
// console.log("lastIndexOf() :", stdName.lastIndexOf('we'))

// ✅✅✅ topic 12 : startsWith

/* abcd, egfsd, av, gh,jk => start with"a" */

// var str = 'Sat Saturday night :) '

// // console.log("startsWith() : ", str.startsWith('Sat', 5)) 
// console.log("startsWith() : ", str.startsWith('ni', 13)) 
// value, position

// ✅✅✅ topic 13 : endsWith()


// var str = 'Cats flying :)'
// console.log("endsWith() : ", str.endsWith(':)')) 
// // value, end - position

// ✅✅✅ topic 14 : includes()
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log("includes() :", sentence.includes('over'))
// console.log("includes() :", sentence.includes('fight'))

// ✅✅✅ topic 14 : concat()
// var a = 'hello'
// var b = 'world'

// console.log(a.concat(' ',b))
// console.log(a.concat('------',b))

// ✅✅✅ topic 15 : split()

// var str = 'Cats flying :) word hello world frog fog dog'
// var word = str.split(' ')
// console.log("word :", word[2]) // array

// ✅✅✅ topic 16 : substring()

var str = 'Cats flying :) word hello world frog fog dog'
// console.log("word :", str.substring(5,10))

// ✅✅✅ topic 17 : replace()

var s = 'The quick brown fox jumps over the lazy dog.';
// console.log("Updated:", s.replace('dog', 'tiger'))
// ✅✅✅ topic 18 : case()
console.log("Lowercase:", s.toLowerCase())
console.log("Uppercase:", s.toUpperCase())
