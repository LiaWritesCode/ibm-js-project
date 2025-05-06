// Typing test text
let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

// Start Test Functions
function startTest () {
// Set the test text
document.getElementById("inputText").value = testText;

//Reset results & timer
document.getElementById("output").innerHTML = "";
startTime = new Date().getTime();

// Change button text and functionality
var button = document.getElementById("btn");
button.innerHTML = "End Test";
button.onclick = endTest;
}

// End Test Functions
function endTest() {
    endTime = new Date().getTime();

// Disable user input
document.getElementById("userInput").readOnly = true;

// Calculate time elapsed & WPM
var timeElapsed = (endTime - startTime) / 1000; // in seconds
var userTypedText = document.getElementById("userInput").value;

// Split the text using regex to count words properly
var typedWords = userTypedText.split(/\s+/).filter(function (word) {
    return word !== "";
}).length;

var wpm = 0; // Default value

if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
}

// Display Results
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
    "<p>Words Typed:" + typedWords + "</p>" +
    "<p>Time Elapsed:" + timeElapsed.toFixed(2) + "seconds</p>" +
    "<p>Words per Minute (WPM):" + wpm + "</p>"

// Reset button
var button = document.getElementById("btn");
button.innerHTML = "Start Test";
button.onclick = startTest;

}