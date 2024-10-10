// JavaScript for dynamic content (optional, can be expanded)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Home page loaded");
});

function subscribe() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('subscription-message');

    if (validateEmail(email)) {
        message.textContent = "Thank you for subscribing!";
        message.style.color = "green";
    } else {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
    }
}

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}


function showPopup() {
    const emailInput = document.getElementById('email');
    if (emailInput.value) {
        document.getElementById('popup').style.display = 'block'; // Show the popup
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.'); // Alert if input is empty
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Hide the popup
}

 // JavaScript to handle registration form submission
 document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Assuming registration is successful
    const username = document.getElementById('username').value;

    // Display the success message
    const messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = `Registration successful! Welcome, ${username}.`;

    // Redirect to home page after 2 seconds
    setTimeout(() => {
        window.location.href = "index.html"; // Redirecting to index.html
    }, 500); // Changed timeout to 2000 milliseconds
});


