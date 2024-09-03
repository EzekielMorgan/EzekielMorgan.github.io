/*
CONSTANT VARS
*/

const VERSION = "0.1.22"

/*
Theme
*/
(() => {
    const ThemeChangeButton = document.getElementById("ThemeButton")

    if (!ThemeChangeButton) {
        return console.error("Page is missing a \"Theme\" button")
    }
    console.log("Theme Button Exists")
    
    const GlobalTheme = document.getElementById("GlobalTheme")

    ThemeChangeButton.onclick = () => {
        console.log("Clicked Theme Button")
        ThemeChangeButton.value = "You clicked me :D!"
        setTimeout(() => {
            ThemeChangeButton.value = "Change Theme"
        }, 3000);
    }
})()

(() => {
    const footer = document.getElementById("footer")
    if (!footer) {
        return console.error("Page is missing the \"footer\"")
    }
    console.log("Footer found")

    footer.innerText = VERSION
})