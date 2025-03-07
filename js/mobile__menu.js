const burger = document.querySelector("#hamburger");

const mobileMenu = () => {
    burger.classList.toggle("open");
}

burger.addEventListener("click", mobileMenu);

// 1.допис стили и скипты
// 2.превести на делиг событий
