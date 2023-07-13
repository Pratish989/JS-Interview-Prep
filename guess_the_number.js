let original = Math.round(100 * Math.random())
console.log("the original number is " + original)

let input = prompt("enter your number")
let chances = 0;

while (original != input) {
  let input = prompt("enter your number")
  // chances++;
  if (original == input) {
    console.log("the number guessed was right")
    chances++
    break
  }

  if (original > input) {

    console.log("the number is less than the input")
    chances++
  }

  if (original < input) {
    console.log("the number is greater than the input")
    chances++
  }

  // chances++;
} 
console.log("chances you took were " + chances)
let a = chances;
let hundred = 100 - a;

console.log("chances you were left with " + hundred)