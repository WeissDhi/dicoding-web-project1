const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.querySelector('button[type="submit"]');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    sendButton.addEventListener('click', function () {
        // Display an alert when the button is clicked
        alert('Pesan berhasil terkirim');

        // Clear input fields
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });
});





