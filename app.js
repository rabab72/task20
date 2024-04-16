Here 's a JavaScript program containing functions to fulfill each of the requirements:

``
`javascript
// 1. Display current date & time
function displayCurrentDateTime() {
    var currentDateTime = new Date();
    console.log(currentDateTime.toString());
}

// 2. Greet user with full name
function greetUser(firstName, lastName) {
    alert("Hello, " + firstName + " " + lastName + "!");
}

// 3. Add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// 4. Calculator
function calculate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

// 5. Square of a number
function square(num) {
    return num * num;
}

// 6. Factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// 7. Counting numbers from start to end
function countNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}

// 8. Compute hypotenuse of a right angle triangle
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}

// 9. Calculate area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
}

// 10. Check if a string is palindrome
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 11. Convert first letter of each word to uppercase
function capitalizeWords(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

// 12. Find longest word in a string
function longestWord(str) {
    var words = str.split(" ");
    Here's a JavaScript program containing functions to fulfill each of the requirements:

`
``
javascript

function displayCurrentDateTime() {
    var currentDateTime = new Date();
    console.log(currentDateTime.toString());
}

function greetUser(firstName, lastName) {
    alert("Hello, " + firstName + " " + lastName + "!");
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

function square(num) {
    return num * num;
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function countNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}

function calculateRectangleArea(width, height) {
    return width * height;
}

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function capitalizeWords(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

function longestWord(str) {
    var words = str.split(" ");
    var longest = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

function calcCircumference(radius) {
    return 2 * Math.PI * radius;
}

function calcArea(radius) {
    return Math.PI * radius * radius;
}
``
`

You can call these functions with appropriate arguments to execute their respective functionalities.var longest = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

// 13. Count occurrences of a letter in a string
function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

// 14. Calculate circumference and area of a circle
function calcCircumference(radius) {
    return 2 * Math.PI * radius;
}

function calcArea(radius) {
    return Math.PI * radius * radius;
}
`
``

You can call these functions with appropriate arguments to execute their respective functionalities.


var dObj = new Date();
var dStr = new Date().toString();
var d = new Date();
var day = d.getDay();
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
alert(dayNames[day]);
var dateObj = new Date();
var year = dateObj.getFullYear();
var month = dateObj.getMonth();
var date = dateObj.getDate();
var hour = dateObj.getHours();
var minute = dateObj.getMinutes();
var second = dateObj.getSeconds();
var later = new Date(2020, 11, 31);
var date1992 = new Date(1992, 1, 2);
alert(new Date(1980, 0, 1).getTime());
var newDate = new Date();
newDate.setFullYear(2023); // Set year to 2023
function changeToJanuary(date) {    
    date.setMonth(0); // January is month 0
    return date;
}
// 1. Display current date and time
var currentDate = new Date();
console.log(currentDate.toString());

// 2. Alert the current month in words
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[currentDate.getMonth()].toLowerCase();
alert("Current month: " + currentMonth);

// 3. Alert the first 3 letters of the current day
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = days[currentDate.getDay()];
alert("TODAY IN " + currentDay.toUpperCase());

// 4. Display "It's Fun day" if it's Saturday or Sunday today
var dayOfWeek = currentDate.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    alert("It's Fun day");
} else {
    alert("It's not Fun day");
}

// 5. Display "First fifteen days of the month" or "Last days of the month" based on the date
var currentDate = new Date();
var currentDayOfMonth = currentDate.getDate();
var message = currentDayOfMonth < 16 ? "First fifteen days of the month" : "Last days of the month";
alert(message);

// 6. Determine the minutes since midnight, Jan. 1, 1970
var minutesSinceMidnight = currentDate.getHours() * 60 + currentDate.getMinutes();
console.log("Elapsed minutes since January 1, 1970: " + minutesSinceMidnight);

// 7. Test whether it's before noon and alert "It's AM" or "It's PM"
var timeOfDay = currentDate.getHours() < 12 ? "AM" : "PM";
alert("It's " + timeOfDay);

// 8. Create a Date object for the last day of the last month of 2020
var laterDate = new Date(2020, 11, 31);
console.log("Last date: " + laterDate);

// 11. Create a Date object for the current date and time, extract the hours, reset the date object an hour ahead, and display the date object
var currentDate = new Date();
console.log("Current date: " + currentDate);
currentDate.setHours(currentDate.getHours() + 1);
console.log("1 hour ago it was: " + currentDate);

// 12. Create a date object and show the date that is reset to 100 years back
var currentDate = new Date();
var yearBack = currentDate.getFullYear() - 100;
currentDate.setFullYear(yearBack);
console.log("100 years back it was: " + currentDate);

// 13. Ask the user about his age, calculate and show his birth year
var age = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
alert("Your birth year is: " + birthYear);
// 1. Custom function to calculate power
function power(a, b) {
    return Math.pow(a, b);
}

// 2. Function to determine if a year is leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// 3. Function to calculate area of triangle
function calculateTriangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// 4. Function to calculate average and percentage of marks
function mainFunction(mark1, mark2, mark3) {
    var avg = calculateAverage(mark1, mark2, mark3);
    var percentage = calculatePercentage(mark1, mark2, mark3);
    console.log("Average marks: " + avg);
    console.log("Percentage: " + percentage + "%");
}

function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

function calculatePercentage(mark1, mark2, mark3) {
    return ((mark1 + mark2 + mark3) / 300) * 100;
}

// 5. Custom function to find index of a character in a string
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

// 6. Function to delete vowels from a sentence
function deleteVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}

// 7. Function to count occurrences of two vowels in succession
function countSuccessiveVowels(text) {
    var count = 0;
    for (var i = 0; i < text.length - 1; i++) {
        if (isVowel(text[i]) && isVowel(text[i + 1])) {
            count++;
        }
    }
    return count;
}

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1;
}

// 8. Functions to convert distance between cities
function convertToMeters(km) {
    return km * 1000;
}

function convertToFeet(km) {
    return km * 3280.84;
}

function convertToInches(km) {
    return km * 39370.1;
}

function convertToCentimeters(km) {
    return km * 100000;
}

// 9. Function to calculate overtime pay
function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12;
    var overtimeHours = Math.max(hoursWorked - regularHours, 0);
    return overtimeHours * overtimeRate;
}

// 10. Function to calculate currency notes for withdrawal
function calculateCurrencyNotes(amount) {
    var hundredNotes = Math.floor(amount / 100);
    amount %= 100;
    var fiftyNotes = Math.floor(amount / 50);
    amount %= 50;
    var tenNotes = Math.floor(amount / 10);
    return [hundredNotes, fiftyNotes, tenNotes];
}

