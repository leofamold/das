console.log('Сайт загружен! 🎉');

document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.querySelector('.greeting');

    if (!greeting) return;

    greeting.addEventListener('click', () => {
        greeting.style.transform = 'rotate(360deg)';
        greeting.style.transition = 'transform 0.6s ease-in-out';
    });
});
