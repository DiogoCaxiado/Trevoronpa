function handleChangeTheme() {
    const changeMode = document.body.classList.toggle("dark");
    const icon = document.getElementById("changeTheme");

    changeMode ? (icon.innerHTML = "light_mode") : (icon.innerHTML = "dark_mode");
}

function handleMenu() {
    const menu = document.querySelector(".menu");
    const opacity = document.querySelector(".menu__opacity");
    const container = document.querySelectorAll(".container");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const card = document.querySelector(".cards");

    if (menu.style.display == "none") {
        menu.style.display = "block";
        opacity.style.backgroundColor = "rgba(0, 0, 0, 0.60)";
        header.style.zIndex = "-1";
        footer.style.zIndex = "-1";
        card.style.zIndex = "-1";
     
        for (const item of container) {
            item.style.zIndex = "-2";
        }
    } else {
        menu.style.display = "none";
        opacity.style.backgroundColor = "transparent";
        header.style.zIndex = "2";
        footer.style.zIndex = "2";
        card.style.zIndex = "1";

        for (const item of container) {
            item.style.zIndex = "1";
        }
    }
}