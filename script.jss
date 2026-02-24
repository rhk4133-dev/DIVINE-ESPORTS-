// Your YouTube channel link
const youtubeChannel = 'https://youtube.com/@divineesport-q9f?si=SdeeFXXjebKsIl-T';

window.addEventListener('DOMContentLoaded', function() {
    const registerCard = document.getElementById('registerCard');
    const registerBtn = registerCard.querySelector('.registerBtn');
    const subscribeCard = document.getElementById('subscribeCard');
    const subscribeBtn = document.getElementById('subscribeBtn');

    // Initially hide register card until subscription
    registerCard.style.display = 'block';

    // If user already subscribed, show register button
    if (localStorage.getItem('subscribed') === 'true') {
        subscribeCard.style.display = 'none';
        registerBtn.classList.add('visible');
    }

    subscribeBtn.addEventListener('click', function() {
        // Open YouTube channel in a new tab
        window.open(youtubeChannel, '_blank');

        // Mark as subscribed in localStorage
        localStorage.setItem('subscribed', 'true');

        // Hide subscribe card
        subscribeCard.style.display = 'none';

        // Fade in the register button
        registerBtn.classList.add('visible');
    });
});