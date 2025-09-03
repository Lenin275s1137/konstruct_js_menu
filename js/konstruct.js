const btn = document.querySelector(".header__menu-btn")
const menu = document.querySelector(".menu")
const addClass = document.querySelector(".header-main-bottom")

btn.addEventListener("click", () => {
    addClass.classList.toggle("open")
})
