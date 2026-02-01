// Homework 1: JavaScript Fundamentals
// Name: Adil Asif
// Date: 1/31/2026

// ============ PART 1: ARRAY FUNCTIONS ============
const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];

// Find the sum of all the number in array.
function sum(arr) {
  let total = 0;
  for (let index = 0; index < arr.length; index++) {
    total = total + arr[index];   // update total tp add sum.
  }
  return total;
}

// Find the average of the array. 
function average(arr) {
  let total = sum(arr);  // Getting total from sum function. 
  let avg = total / arr.length;  // Computing Average. 
  return avg;
}

// Find the smallest number.
function min(arr) {
  let smallest = arr[0];
  for (let index = 1; index < arr.length; index++) {  // Loop through the array. 
    if (arr[index] < smallest){   // compare current element with smallest. 
      smallest = arr[index];  // Assigning smallest number to smallest (variable). 
    }
  }
  return smallest;
}

// Find the largest number.
function max(arr) {
  let largest = arr[0];
  for (let index = 1; index < arr.length; index++) {  // Loop through the array. 
    if (arr[index] > largest){   // comare current element with largest. 
      largest = arr[index];   // Assigning largest number to largest (variable).
    }
  }
  return largest;
}

// ============ PART 2: STRING FUNCTIONS ============
function capitalize(str) {
  // TODO: Return string with first letter capitalized
  // "hello" -> "Hello"
}

function reverse(str) {
  // TODO: Return the string reversed
  // "hello" -> "olleh"
  // Hint: str.split("").reverse().join("")
}

function countVowels(str) {
  // TODO: Return count of vowels (a, e, i, o, u)
  // "hello" -> 2
}

// ============ PART 3: OBJECT ============
const student = {
  name: "Your Name",
  age: 20,
  grades: [85, 92, 78, 90, 88],
  
  getAverage: function() {
    // TODO: Return average of this.grades
  },
  
  isHonorRoll: function() {
    // TODO: Return true if average > 85
  }
};

// ============ TEST YOUR CODE ============
console.log("=== Part 1: Arrays ===");
console.log("Numbers:", numbers);
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));

console.log("\n=== Part 2: Strings ===");
console.log("capitalize('hello'):", capitalize("hello"));
console.log("reverse('hello'):", reverse("hello"));
console.log("countVowels('hello'):", countVowels("hello"));

console.log("\n=== Part 3: Object ===");
console.log("Student:", student.name);
console.log("Grades:", student.grades);
console.log("Average:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());