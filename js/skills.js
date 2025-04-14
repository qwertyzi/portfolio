const cardList = [
    {
        tittle: "HTML5",
        idSprite: "html",
        description: "",
    },
    {
        tittle: "CSS3",
        idSprite: "css",
        description: "",
    },
    {
        tittle: "JavaScript",
        idSprite: "js",
        description: "",
    },
    {
        tittle: "SCSS",
        idSprite: "scss",
        description: "",
    },
    {
        tittle: "Git",
        idSprite: "git",
        description: "",
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

        const icon = document.createElement("div");
        icon.classList.add("card-skill__icon");
        const sprite = 
        `
        <svg class="skill-icon">
            <use href="/img/sprite.svg#${element.idSprite}"></use>
        </svg>
        `;

        const title = document.createElement("h6");
        title.innerText = element.tittle;
        title.classList.add("card-skill__title")

        listItem.append(card);
        card.append(icon);
        icon.innerHTML = sprite;
        card.append(title);

        listElement.append(listItem);
    });
    content.append(listElement);
}

createListCard()