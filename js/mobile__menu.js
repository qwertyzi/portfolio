// const burger = document.querySelector("#hamburger");
// const menu = document.querySelector("#menu")


// const mobileMenu = () => {
//     burger.classList.toggle("open");
//     menu.classList.toggle("open")
// }

// burger.addEventListener("click", mobileMenu);


// 1.допис стили и скипты
// 2.превести на делиг событий

const header = document.querySelector("#header");

const mobileMenu = (event) => {
    console.log(event);
    
    const isBurger = event.target.closest("#hamburger")

    if (isBurger) {
        isBurger.classList.toggle("open");
        const menu = header.querySelector("#menu")
        menu.classList.toggle("open")
    }
    
}

header.addEventListener("click", (event) => mobileMenu(event));









