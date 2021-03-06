/* eslint-disable no-console */
/* eslint-disable semi */

//Write a recursive function that counts how many sheep jump over the fence.
// Your program should take a number as an input.
// That number should be the number of sheep you have.
//  The function should display the number along with the message
//  'Another sheep jumps over the fence' until no more sheep are left

const sheepCount = (int) => {
  // Base Case
  if (int === 0) {
    return 'All sheep have jumped over the fence'
  }
  // Recursive Case
  return `${int}: Another sheep jumps over the fence \n` + sheepCount(int - 1)
}

console.log(sheepCount(3))
