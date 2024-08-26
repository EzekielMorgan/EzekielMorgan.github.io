/*
Theme
*/
() => {
    const ThemeChangeButton = document.getElementById("ThemeButton")

    if (!ThemeChangeButton) return console.error("Page is missing a \"Theme\" button")
    
    const GlobalTheme = document.getElementById("GlobalTheme")

    ThemeChangeButton.onmousedown = () => {
        ThemeChangeButton.innerText = "You clicked me :D!"
        setTimeout(() => {
            ThemeChangeButton.title = "Change Theme"
        }, 3000);
    }
}