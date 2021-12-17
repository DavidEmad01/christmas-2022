/* ================== Start Header ===================== */
let header = document.querySelector("header");
let menu = document.querySelector("header .links-container .links");
let openMenu = document.querySelector("header .nav .menu-open");
let closeMenu = document.querySelector("header .links-container .links .close");
let links = document.querySelectorAll("header .links-container .links li a");

openMenu.onclick = function () {
    menu.classList.add("open");
}

closeMenu.onclick = function () {
    menu.classList.remove("open");
}

/* !!!___WARN___ */
// will be update by onscroll at the end of the websire
links.forEach(function (a) {
    a.onclick = function () {
        menu.classList.remove("open");
        // remove class ative from all links
        links.forEach ((a) => a.classList.remove("active"));

        // add class active to this link
        a.classList.add("active");
    }
});

window.onscroll = function () {
    if (window.scrollY >= (header.offsetTop + 50)) {
        header.classList.add("shadow");
    } else {
        header.classList.remove("shadow");
    }
}

/* =================== End Header ====================== */

/* ============= Swiper =============== */

let swiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',
    centeredSlides: true,
    slidesPerView: 'auto',

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {
        992: {
            spaceBetween: 80,
        },
    },
});


/* ================ Scroll =============== */
let scrollTop =document.querySelector(".scroll-btn");
window.addEventListener("scroll", function () {
    if (window.scrollY >= window.innerHeight - 200) {
        scrollTop.classList.add("show-up");
    } else {
        scrollTop.classList.remove("show-up");
    }
})

/* ================= Dark Mode =================== */
let color = "#f00";
let darkMode = document.querySelector(".dark-mode .moon");
let sun = document.querySelector(".dark-mode .sun");
let html = document.querySelector("html");
// Run the music
let music = document.querySelector("audio");

if (localStorage.getItem("mode") == "dark") {
    changeToDark();
} else {
    changeToLight();
}

darkMode.addEventListener("click", changeToDark);
sun.addEventListener("click", changeToLight);


// Change to Dark
function changeToDark() {
    // Change all colors to the dark mode
    html.style.cssText = "--body-color: hsl(355deg 20% 12%); --container-color: hsl(355deg 16% 16%) !important; --title-color: white;";

    document.querySelector(".message .container").style.cssText = "background-color: hsl(355deg 16% 16%);";

    document.querySelector(".message .send form input[type = 'submit']").style.cssText = "background-color: var(--first-color);";

    // Change the icon
    darkMode.classList.add("hide-dark");
    sun.classList.remove("hide-dark");

    window.localStorage.setItem("mode", "dark");

    music.play();
}


// Change to light
function changeToLight() {
    // Change all colors to the dark mode
    html.style.cssText = "--body-color: #fff; --container-color: #fff; --title-color: hsl(355, 4%, 15%);";

    document.querySelector(".message .container").style.cssText = "background-color: var(--first-color);";

    document.querySelector(".message .send form input[type = 'submit']").style.cssText = "background-color: black;";

    // Change the icon
    sun.classList.add("hide-dark");
    darkMode.classList.remove("hide-dark");

    window.localStorage.setItem("mode", "light");

    music.play();
}


/* ============ Changing Links of the header ============= */
// Sections
let homeSection = document.querySelector(".home");
let celebrateSection = document.querySelector(".celebrate");
let giftsSection = document.querySelector(".gifts");
let newSection = document.querySelector(".new");

// Array of sections

// Links
let homeLink = document.querySelector(".home-link");
let celebrateLink = document.querySelector(".celebrate-link");
let giftsLink = document.querySelector(".gifts-link");
let newLink = document.querySelector(".new-link");

window.addEventListener("scroll", function () {
    
    if (window.scrollY >= homeSection.offsetTop && window.scrollY <= homeSection.offsetHeight + homeSection.offsetTop) {
        addRemoveActive(homeLink);
    } else {
        homeLink.classList.remove("active");
    }

    if (window.scrollY >= celebrateSection.offsetTop && window.scrollY <= celebrateSection.offsetHeight + celebrateSection.offsetTop - 30) {
        addRemoveActive(celebrateLink);
    } else {
        celebrateLink.classList.remove("active");
    }

    if (window.scrollY >= giftsSection.offsetTop - 30 && window.scrollY <= giftsSection.offsetHeight + giftsSection.offsetTop) {
        addRemoveActive(giftsLink);
    } else {
        giftsLink.classList.remove("active");
    }

    if (window.scrollY >= newSection.offsetTop - 30 && window.scrollY <= newSection.offsetHeight + newSection.offsetTop) {
        addRemoveActive(newLink);
    } else {
        newLink.classList.remove("active");
    }
})

// Add OR remove active
function addRemoveActive(item) {
    menu.classList.remove("open");
    // remove class ative from all links
    links.forEach ((a) => a.classList.remove("active"));

    // add class active to this link
    item.classList.add("active");
}

/* ============== Scroll To Top ================= */
let up = document.querySelector(".scroll-btn");

up.addEventListener("click", function () {
    window.scrollTo(0, 0);
})