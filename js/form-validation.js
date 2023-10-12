document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Validate inputs
        if (nameInput.value.trim() === '') {
            alert('Name is required');
            return;
        }

        if (!validateEmail(emailInput.value)) {
            alert('Invalid email format');
            return;
        }

        if (messageInput.value.trim() === '') {
            alert('Message is required');
            return;
        }

        // If all inputs are valid, display success message
        alert('Thanks!\nThe form was submitted successfully.');

        // You can also reset the form if needed
        form.reset();
    });
});
