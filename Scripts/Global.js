/*
Theme
*/
() => {
    const ThemeChangeButton = document.getElementById("ThemeButton")

    if (!ThemeChangeButton) return console.error("Page is missing a \"Theme\" button")
    
    const GlobalTheme = document.getElementById("GlobalTheme")

    ThemeChangeButton.onclick = () => {
        console.log("Clicked Theme Button")
        ThemeChangeButton.value = "You clicked me :D!"
        setTimeout(() => {
            ThemeChangeButton.value = "Change Theme"
        }, 3000);
    }
}