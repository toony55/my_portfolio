/* ================toggle style switcher========================== */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    })
    // hide style switcher on scroll and close on click outside
window.addEventListener("scroll", () => {
    console.log("scroll");
    closeStyleSwitcher();
});
document.addEventListener("scroll", () => {
    closeStyleSwitcher();
});
document.body.addEventListener("click", (event) => {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher.classList.contains("open") && !event.target.closest(".style-switcher")) {
        closeStyleSwitcher();
    }
});

function closeStyleSwitcher() {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
}

/* ============================theme color========================== */

const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    localStorage.setItem("color", color);
    changeColor();
}

function changeColor() {
    alternateStyle.forEach((style) => {
        if (localStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}


/* ============================ theme light and dark mode========================== */

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})