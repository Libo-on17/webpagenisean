document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = button.href;
            }, 500); 
        });
    });
});
