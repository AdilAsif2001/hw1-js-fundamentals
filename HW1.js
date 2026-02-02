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

// Function to capitalize first letter of a string.
function capitalize(str) {
  let firstLetter = str[0].toUpperCase(); // Capitalize first character
  let restOfWord = str.slice(1);          // Get rest of the string
  return firstLetter + restOfWord;        // Combine and return
}

// Function to reverse a String.
function reverse(str) {
  let reversed = "";  // Empty string to store reversed result

  // Loop from last character to first
  for(let i = str.length - 1; i >= 0; i--){
    reversed = reversed + str[i];  // Add characters in reverse order
  }
  return reversed;
}

// Function to count vowels in a string.
function countVowels(str) {
  let count = 0;  // Variable to count vowels

   // Loop through each character in the string
  for(let i = 0; i < str.length; i++){
    let letter = str[i].toLowerCase();  // Convert character to lowercase

    // Check if character is a vowel
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      count++;  // Increase vowel count
    }
  }
  return count;
}

// ============ PART 3: OBJECT ============

// Student object with properties and methods
const student = {
  name: "Adil Asif",  // Student name
  age: 20,           // Student age
  grades: [85, 92, 78, 90, 88],  // Array of grades
  
  // Get average grade.
  getAverage: function() {
    let total = 0;  // Store sum of grades

    // Loop through grades array
    for (let index = 0; index < this.grades.length; index++) {
      total = total + this.grades[index];  // Add grade to total
    }
    return total / this.grades.length;
  },
  
  // Check if student is on honor roll.
  isHonorRoll: function() {

    // If average grade is greater than 85
    if(this.getAverage() > 85){
      return true;   // Student is on honor roll
    } else {
      return false;  // Student is not on honor roll
    }
  }
};

// ============ TEST YOUR CODE =============
// Test Part 1
console.log("=== Part 1: Arrays ===");
console.log("Numbers:", numbers);
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));

// Test Part 2
console.log("\n=== Part 2: Strings ===");
console.log("capitalize('hello'):", capitalize("hello"));
console.log("reverse('hello'):", reverse("hello"));
console.log("countVowels('hello'):", countVowels("hello"));

// Test Part 3
console.log("\n=== Part 3: Object ===");
console.log("Student:", student.name);
console.log("Grades:", student.grades);
console.log("Average:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());