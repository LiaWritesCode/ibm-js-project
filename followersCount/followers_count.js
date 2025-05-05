let count = 0; // Initialize count to 0

// Increasing count by 1
function increaseCount() {
    count++; // in increments
}

function displaycount() {
    document.getElementById('countDisplay').innerHTML=count; // Display count in HTML
}

function increaseCount() {
    count++; // Increment count by 1
    displaycount(); // Display count
}

// Follower Milestones
function checkCountValue() {
    if (count === 10) {
        alert("Your post gained 10 followers. Congratulations!");
    }
    else if (count === 20) {
        alert("Your post gained 20 followers. Great job!");
    }
}

function increaseCount() {
    count++; // Increment count by 1
    displaycount(); // Displays the count
    checkCountValue(); // Check count value, display messages
}