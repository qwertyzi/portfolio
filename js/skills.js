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
    const listElement = document.createElement("ul");

    cardList.forEach(element => {
        console.log(element);
        
    });
}

createListCard()