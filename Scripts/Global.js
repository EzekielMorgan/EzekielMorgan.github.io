/*
CONSTANT VARS
*/

const VERSION = "0.1.32";

/*
Theme
*/
try {
    console.log("Theme Button")
    const ThemeChangeButton = document.getElementById("ThemeButton")

    if (!ThemeChangeButton) {
        throw new Error("Page is missing a \"Theme\" button")
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
} catch {

};

/*
Footer
*/
try {
    console.log("Searching for footer")
    const footer = document.getElementById("footer")
    if (!footer) {
        throw new Error("Page is missing the \"footer\"")
    }
    console.log("Footer found")

    footer.innerText = `Version: ${VERSION} | Developed by Ezekiel Morgan`
} catch {

};