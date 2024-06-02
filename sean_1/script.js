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
document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profile-pic');
    
    profilePic.addEventListener('click', () => {
        profilePic.classList.toggle('enlarged');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profile-pic');
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay-img');
    
    profilePic.addEventListener('click', () => {
        overlayImg.src = profilePic.src;
        overlay.classList.add('visible');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
    });
});
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}
