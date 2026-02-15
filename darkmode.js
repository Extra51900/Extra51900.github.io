let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');
const img = document.getElementById('main-img');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    img.src = "main2.jpg";
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    img.src = "main.jpg";
    localStorage.removeItem('darkmode');
}

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});