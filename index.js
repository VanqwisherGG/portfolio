// start of dark mode script
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('mode-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'inactive')
}

if (darkmode === 'active') {
    enableDarkmode()
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    if(darkmode !== "active") {
        enableDarkmode()
    } else {
        disableDarkmode()
    }
})
// end of dark mode script

// about me container hider start
function myFunction() {
    let aboutHider = document.querySelector('.about-container');
    let plus = document.getElementById('icon-plus')
    let minus = document.getElementById('icon-minus')
    
    aboutHider.classList.toggle("active");

    if (aboutHider.classList.contains('active')) {
        plus.style.display = "none";
        minus.style.display = "inline";
    } else {
        plus.style.display = "inline";
        minus.style.display = "none";
    }
}
// about me container hider end

// menu hider start
function menuHiderFunction() {
    let containerMenu = document.querySelector('.container-menu');
    let buttonHider = document.getElementById('button-hider');
    let hiderMenu = document.querySelector('.menu');

    containerMenu.classList.toggle('active');

    if (containerMenu.classList.contains('active')) {
        hiderMenu.style.display = "flex";
        buttonHider.innerText = "Hide Menu";
    } else {
        hiderMenu.style.display = "none";
        buttonHider.innerText = "Show Menu";
    }
}
// menu hider end 