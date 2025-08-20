// Problem 1: Reverse a String


// Problem 2: Count Vowels in a String


// Problem 3: Check for Palindrome


// Problem 4: Find the Maximum Number


// Problem 5: Remove Duplicates from an Array


// Problem 6: Sum of All Numbers in an Array


// Problem 7: Find Even Numbers in an Array


// Problem 8: Capitalize First Letter of Each Word


// Problem 9: Find the Factorial of a Number


// Problem 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
