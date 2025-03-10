function fizzBuzz (num) {
  
  if (num !== Number) {
    if (num % 5 == 0 && num % 3 == 0) {
      return "FizzBuzz"
    }
    if (num % 5 == 0) {
      return "Buzz"
    }
    if (num % 3 == 0) {
      return "Fizz"
    }
    return num
  }
  return num
}

console.log("a", fizzBuzz("A"))
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i))
}