function submitFeedback(){
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('experienceText').value;
   
    alert('Thank you for your valuable feedback!')

// Display of User Feedback
document.getElementById('userName').innerHTML = username;
document.getElementById('userAge').innerHTML = age;
document.getElementById('userEmail').innerHTML = email;
document.getElementById('userJob').innerHTML = job;
document.getElementById('userDesignation').innerHTML = designation;
document.querySelectorAll('#userProductChoice').forEach(span => {
    span.innerHTML = productType});
document.getElementById('userFeedback').innerHTML = feedback;
document.getElementById('userExperience').innerHTML = experience;

// Display Information
document.getElementById('userInfo').style.display = 'block';
}

// On click Submit Button
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Key press: Submit
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
  