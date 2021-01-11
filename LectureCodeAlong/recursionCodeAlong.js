/* eslint-disable no-console */
/* eslint-disable semi */
//Count down function

// function countDown(from) {
//   console.log(from)
//   countDown(from -1)
// }
// countDown(5)

//This kills the computer. There is no exit case and you will continue to recur.

function countDown(from) {
  if (from === 0){  //or <= 0 to include decimals
    return
  }
  console.log(from)
  countDown(from -1)
}
countDown(5)

//log: 5  4  3  2  1  0

//NOTE: Maybe use this for line queue in Petful


//This function takes a string and capitalizes each letter one at a time
//Base case tells us if the string is empty, we are done.

function upperStr(str) {
  if (str === '') {
    return ''
  }
  const newChar = str[0].toUpperCase()

  return newChar + upperStr(str.slice(1))
}

console.log(upperStr('hello'))

// upperStr('hello') === 'H' + upperStr('ello')    return 'HELLO'
// upperStr('ello') === 'E' + upperStr('llo')      return 'ELLO'
// upperStr('llo') === 'L' + upperStr('lo')        return 'LLO'
// upperStr('lo') === 'L' + upperStr('o')          return 'LO'
// upperStr('o') === 'O' + upperStr('')            return 'O'
// upperStr('') === '' BASE CASE                   return ''

//Write a function that takes an array of unkown set of numers as input, and outputs an array with each input valu doubled

function arrayDoubler(arr) {
  if (arr.length === 0) {
    return arr 
  }
  const [first, ...rest] = arr
  const doubledFirst = first * 2
  const doubledRemaining = arrayDoubler(rest)

  return [doubledFirst, ...doubledRemaining]
}
console.log(arrayDoubler([1, 3, 9]))

//NOTE: console.log(first, rest) Talk about this with Mario. How does this take the first element as a parameter and everything after the spread operator is what's left?

// 2^0 = 1
// 2^1 = 2
// 2^2 = 4
// 2^3 = 8

// 168421

// 0    0
// 1    1
// 10   0 + 2 = 3
// 11   1 + 2 = 3
// 100  0 + 0 +4 = 4
// 101  1 + 0 + 4 = 5
// 110  1 + 2 + 4 = 6
// 111  1 + 2 + 4 = 7
// 1000 0 + 0 + 0 + 8 = 8
// 10101 =24

  D     B     B     D
/ 6    110    11    3
/ 8    1000   100   4
/ 5    101    10    2

function toBinary(x) {
  if (x === 0 || x === 1) {
    return x.toString()      //to string since its easy to look at
  }

  const lsb = (x % 2).toString()  //lsb is least significant bit modulo allows us to work out the value of the smallest bit
  const restAsDecimal = Math.floor(x / 2)
  const restAsBinary = toBinary(restAsDecimal)
  return restAsBinary + lsb

}

console.log(toBinary(10)) // 1010