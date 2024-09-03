/*
CONSTANT VARS
*/

const VERSION = "0.1.26";

/*
Theme
*/
(() => {
    console.log("Theme Button")
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

/*
Footer
*/
(() => {
    console.log("Searching for footer")
    const footer = document.getElementById("footer")
    if (!footer) {
        return console.error("Page is missing the \"footer\"")
    }
    console.log("Footer found")

    footer.innerText = VERSION
})()