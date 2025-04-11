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

    cardList.forEach(element => {
        const listItem = document.createElement("li");
        const card = document.createElement("div");
        const icon = document.createElement("div");
        const sprite = 
        `
        <svg class="social-icon" viewBox="0 0 24 24" width="114" height="129">
            <use href="/img/sprite.svg#${element.idSprite}"></use>
        </svg>
        `;
        const title = document.createElement("h6");
        title.innerText = element.tittle;

        listItem.append(card);
        card.append(icon);
        icon.innerHTML = sprite;
        card.append(title);

        listElement.append(listItem);
    });
    content.append(listElement);
}

createListCard()