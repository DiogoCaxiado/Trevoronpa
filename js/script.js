function handleChangeTheme() {
    const changeMode = document.body.classList.toggle("dark");
    const icon = document.getElementById("changeTheme");

    changeMode ? (icon.innerHTML = "light_mode") : (icon.innerHTML = "dark_mode");
}

function handleMenu() {
    const menu = document.querySelector(".menu");
    const opacity = document.querySelector(".menu__opacity");
    const container = document.querySelectorAll(".container");

    if (menu.style.display == "none") {
        menu.style.display = "block";
        opacity.style.backgroundColor = "rgba(0, 0, 0, 0.60)";
  
        for (const item of container) {
            item.style.zIndex = "-1";
        }
    } else {
        menu.style.display = "none";
        opacity.style.backgroundColor = "transparent";

        for (const item of container) {
            item.style.zIndex = "1";
        }
    }
}