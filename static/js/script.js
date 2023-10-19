// toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navbarItems = navbar.querySelectorAll('a');

menuIcon.onclick = () => {
    if (menuIcon.classList.contains('bx-x')) {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    } else {
        menuIcon.classList.remove('bx-menu');
        menuIcon.classList.add('bx-x');
    }
    navbar.classList.toggle('active');
};

document.addEventListener('mouseup', function(e) {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
        navbar.classList.remove('active');
    }
});

navbarItems.forEach(item => {
    item.onclick = () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    };
});


// scroll section active class switch
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // stick navbar
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
};

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// function submitForm() {
//     // Validate the form fields in JavaScript
//     var fullName = document.querySelector('input[name="full_name"]').value;
//     var emailAddress = document.querySelector('input[name="email_address"]').value;
//     var mobileNumber = document.querySelector('input[name="mobile_number"]').value;
//     var emailSubject = document.querySelector('input[name="email_subject"]').value;
//     var message = document.querySelector('textarea[name="message"]').value;

//     if (!fullName || !emailAddress || !mobileNumber || !emailSubject || !message) {
//         alert("Fill Required Field");
//     } else {
//         // Submit the form using JavaScript (optional)
//         document.querySelector('form').submit();
//     }
// }

// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the form from submitting via default HTML behavior
//     submitForm();
// });

$(document).ready(function () {
    $('#contact-form').submit(function (event) {
        event.preventDefault();  // Prevent the default form submission

        // Serialize the form data into a format that can be sent via AJAX
        var formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: '/submit_contact_form',
            data: formData,
            success: function (response) {
                // Handle the success response, e.g., show a success message
                console.log(response); // Log the response to the browser console
                // Update a message element with the response (e.g., $('#message').text(response);)
            },
            error: function (error) {
                // Handle the error, e.g., show an error message
                console.log(error); // Log the error to the browser console
            }
        });
    });
});