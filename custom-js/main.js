const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// ======= ADD EVENT-LISTENER TO THE BUTTON =========
themeToggle.addEventListener('click', () =>{
     body.classList.toggle('dark-mode');
});