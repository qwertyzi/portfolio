const cardList = [
    {
        tittle: "HTML5",
        idSprite: "html",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quae blanditiis? Quis, saepe ex, accusamus quasi aliquid vero aperiam consequatur sunt numquam repudiandae similique labore, accusantium vitae nihil culpa!",
    },
    {
        tittle: "CSS3",
        idSprite: "css",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quae blanditiis? Quis, saepe ex, accusamus quasi aliquid vero aperiam consequatur sunt numquam repudiandae similique labore, accusantium vitae nihil culpa!",
    },
    {
        tittle: "JavaScript",
        idSprite: "js",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quae blanditiis? Quis, saepe ex, accusamus quasi aliquid vero aperiam consequatur sunt numquam repudiandae similique labore, accusantium vitae nihil culpa!",
    },
    {
        tittle: "SCSS",
        idSprite: "scss",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quae blanditiis? Quis, saepe ex, accusamus quasi aliquid vero aperiam consequatur sunt numquam repudiandae similique labore, accusantium vitae nihil culpa!",
    },
    {
        tittle: "Git",
        idSprite: "git",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quae blanditiis? Quis, saepe ex, accusamus quasi aliquid vero aperiam consequatur sunt numquam repudiandae similique labore, accusantium vitae nihil culpa!",
    },
]

const createListCard = () => {
    const content = document.querySelector("#skillsContent");
    const listElement = document.createElement("ul");
    listElement.classList.add("list-skills");

    cardList.forEach(element => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-skills__item");
        
        const card = document.createElement("div");
        card.classList.add("card-skill");

        card.setAttribute("data-card", "");
        
        const cardFront = document.createElement("div");
        cardFront.classList.add("card-skill__front");

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-skill__back");

        const icon = document.createElement("div");
        icon.classList.add("card-skill__icon");
        const sprite = 
        `
        <svg class="skill-icon skill-icon--${element.idSprite}">
            <use href="/img/sprite.svg#${element.idSprite}"></use>
        </svg>
        `;

        const title = document.createElement("h6");
        title.innerText = element.tittle;
        title.classList.add("card-skill__title")
        
        const description = document.createElement("p");
        description.innerText = element.description;
        description.classList.add("card-skill__description");

        const close = document.createElement("button");
        close.classList.add("card-skill__close");
        close.setAttribute("data-close", "");

        listItem.append(card);
        card.append(cardFront);
        cardFront.append(icon, title)
        icon.innerHTML = sprite;
        card.append(cardBack);
        cardBack.append(description);

        cardBack.append(close)

        listElement.append(listItem);
    });
    content.append(listElement);

    listElement.addEventListener("click", event => animationCard(event));
}

const animationCard = (event) => {
    const isCard = event.target.closest("[data-card]");
    const isClose = event.target.closest("[data-close]")
    
    if (isClose) {
        const card = isClose.closest("[data-card]");
        card.classList.remove("active");
        return
    }
    
    if (isCard) {
        isCard.classList.add("active");
    }
}

createListCard()