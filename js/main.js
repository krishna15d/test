document.addEventListener('DOMContentLoaded', function() {
    displayCourses();
    document.getElementById('contactForm').addEventListener('submit', submitContactForm);
});

function displaySuccessMessage(message) {
    alert(message);
}

function submitContactForm(event) {
    event.preventDefault();
    // AJAX call to php/contact.php
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/contact.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (this.status === 200) {
            displaySuccessMessage('contactSuccess');
        }
    };
    xhr.send(new FormData(event.target));
}