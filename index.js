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

// about me container hider

function myFunction () {
    let aboutHider = document.querySelector('.about-container');
    if (aboutHider.style.display === "none") {
        aboutHider.style.display = "flex";
    } else {
        aboutHider.style.display = "none";
    }
}


