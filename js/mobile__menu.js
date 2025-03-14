const header = document.querySelector("#header");

const mobileMenu = (event) => {
    const isBurger = event.target.closest("#hamburger")
    const isAnchorLink = event.target.closest("[data-anchor]")

    if (isBurger) {
        isBurger.classList.toggle("open");
        const menu = header.querySelector("#menu")
        menu.classList.toggle("open")
    }

    if (isAnchorLink) {
        const menu = header.querySelector("#menu")
        menu.classList.remove("open")
        const burger = document.querySelector("#hamburger")
        burger.classList.remove("open")
    }
}

header.addEventListener("click", (event) => mobileMenu(event));
