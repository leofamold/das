console.log('Сайт загружен! 🎉');

document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.querySelector('.greeting');
    greeting.addEventListener('click', function() {
        this.style.transform = 'rotate(360deg)';
        this.style.transition = 'transform 0.6s ease-in-out';
    });
});