function submitForm() {
    // Reset previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get form data
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var subject = document.querySelector('input[name="subject"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    // Check if any field is empty
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        return;
    }

    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        return;
    }
    // Check for a valid email format
    if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        return;
    }
    if (!subject) {
        document.getElementById('subjectError').textContent = 'Subject is required.';
        return;
    }

    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required.';
        return;
    }

    // Create a FormData object
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    // Send a POST request to Formspree
    fetch('https://formspree.io/f/xgegajvw', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from Formspree
            console.log('Formspree response:', data);
            handleFormspreeResponse(data);
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error.message);
            handleFormspreeResponse({ error: 'Failed to send message. Please try again later.' });
        });
}

function isValidEmail(email) {
    // Regular expression for a valid email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function handleFormspreeResponse(data) {
    if (data.error) {
        // Display error message
        alert('Error: ' + data.error);
    } else {
        // Redirect to a thank you page
        window.location.href = 'thank_you.html';
    }
}