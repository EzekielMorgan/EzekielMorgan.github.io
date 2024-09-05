/*
CONSTANT VARS
*/

const VERSION = "0.1.44";

/*
DEBOUNCE VARS
*/

let Debounces = {
    ThemeButtonBound: false
}

/*
Theme
*/
const BindThemeButton = async () => {
    if (Debounces.ThemeButtonBound) {
        throw new Error("Attemped to bind already bound ThemeButton")
    }
    const ThemeChangeButton = document.getElementById("ThemeButton")

    if (!ThemeChangeButton) {
        throw new Error("Page is missing a \"Theme\" button")
    }

    const GlobalTheme = document.getElementById("GlobalTheme")

    ThemeChangeButton.onclick = () => {
        console.log("Clicked Theme Button")
        ThemeChangeButton.value = "You clicked me :D!"
        setTimeout(() => {
            ThemeChangeButton.value = "Change Theme"
        }, 3000);
    }
    Debounces.ThemeButtonBound = true
}

/*
Footer
*/
const UpdateFooter = async () => {
    const footer = document.getElementById("footer")
    if (!footer) {
        throw new Error("Page is missing the \"footer\"")
    }

    footer.innerText = `Version: ${VERSION} | Developed by Ezekiel Morgan`
}


/*
          _____                   _______                   _____                    _____                    _____                            _____                    _____                    _____                    _____          
         /\    \                 /::\    \                 /\    \                  /\    \                  /\    \                          /\    \                  /\    \                  /\    \                  /\    \         
        /::\    \               /::::\    \               /::\____\                /::\    \                /::\    \                        /::\    \                /::\    \                /::\____\                /::\    \        
       /::::\    \             /::::::\    \             /::::|   |               /::::\    \              /::::\    \                      /::::\    \               \:::\    \              /::::|   |               /::::\    \       
      /::::::\    \           /::::::::\    \           /:::::|   |              /::::::\    \            /::::::\    \                    /::::::\    \               \:::\    \            /:::::|   |              /::::::\    \      
     /:::/\:::\    \         /:::/~~\:::\    \         /::::::|   |             /:::/\:::\    \          /:::/\:::\    \                  /:::/\:::\    \               \:::\    \          /::::::|   |             /:::/\:::\    \     
    /:::/__\:::\    \       /:::/    \:::\    \       /:::/|::|   |            /:::/__\:::\    \        /:::/__\:::\    \                /:::/__\:::\    \               \:::\    \        /:::/|::|   |            /:::/  \:::\    \    
    \:::\   \:::\    \     /:::/    / \:::\    \     /:::/ |::|   |           /::::\   \:::\    \      /::::\   \:::\    \              /::::\   \:::\    \              /::::\    \      /:::/ |::|   |           /:::/    \:::\    \   
  ___\:::\   \:::\    \   /:::/____/   \:::\____\   /:::/  |::|   | _____    /::::::\   \:::\    \    /::::::\   \:::\    \            /::::::\   \:::\    \    ____    /::::::\    \    /:::/  |::|   | _____    /:::/    / \:::\    \  
 /\   \:::\   \:::\    \ |:::|    |     |:::|    | /:::/   |::|   |/\    \  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\____\          /:::/\:::\   \:::\____\  /\   \  /:::/\:::\    \  /:::/   |::|   |/\    \  /:::/    /   \:::\ ___\ 
/::\   \:::\   \:::\____\|:::|____|     |:::|    |/:: /    |::|   /::\____\/:::/  \:::\   \:::\____\/:::/  \:::\   \:::|    |        /:::/  \:::\   \:::|    |/::\   \/:::/  \:::\____\/:: /    |::|   /::\____\/:::/____/  ___\:::|    |
\:::\   \:::\   \::/    / \:::\    \   /:::/    / \::/    /|::|  /:::/    /\::/    \:::\  /:::/    /\::/   |::::\  /:::|____|        \::/    \:::\  /:::|____|\:::\  /:::/    \::/    /\::/    /|::|  /:::/    /\:::\    \ /\  /:::|____|
 \:::\   \:::\   \/____/   \:::\    \ /:::/    /   \/____/ |::| /:::/    /  \/____/ \:::\/:::/    /  \/____|:::::\/:::/    /          \/_____/\:::\/:::/    /  \:::\/:::/    / \/____/  \/____/ |::| /:::/    /  \:::\    /::\ \::/    / 
  \:::\   \:::\    \        \:::\    /:::/    /            |::|/:::/    /            \::::::/    /         |:::::::::/    /                    \::::::/    /    \::::::/    /                   |::|/:::/    /    \:::\   \:::\ \/____/  
   \:::\   \:::\____\        \:::\__/:::/    /             |::::::/    /              \::::/    /          |::|\::::/    /                      \::::/    /      \::::/____/                    |::::::/    /      \:::\   \:::\____\    
    \:::\  /:::/    /         \::::::::/    /              |:::::/    /               /:::/    /           |::| \::/____/                        \::/____/        \:::\    \                    |:::::/    /        \:::\  /:::/    /    
     \:::\/:::/    /           \::::::/    /               |::::/    /               /:::/    /            |::|  ~|                               ~~               \:::\    \                   |::::/    /          \:::\/:::/    /     
      \::::::/    /             \::::/    /                /:::/    /               /:::/    /             |::|   |                                                 \:::\    \                  /:::/    /            \::::::/    /      
       \::::/    /               \::/____/                /:::/    /               /:::/    /              \::|   |                                                  \:::\____\                /:::/    /              \::::/    /       
        \::/    /                 ~~                      \::/    /                \::/    /                \:|   |                                                   \::/    /                \::/    /                \::/____/        
         \/____/                                           \/____/                  \/____/                  \|___|                                                    \/____/                  \/____/                                  
                                                                                                                                                                                                                                         
*/

/*
Init
*/

document.addEventListener("DOMContentLoaded", () => {
    BindThemeButton().then(() => {
        console.log("ThemeButton Bound")
    }).catch(console.error)
    
    UpdateFooter().then(() => {
        console.log("Footer Updated")
    }).catch(console.error)
})

setTimeout(() => {
    BindThemeButton().then(() => {
        console.log("ThemeButton Bound")
    }).catch(console.error)
    
    UpdateFooter().then(() => {
        console.log("Footer Updated")
    }).catch(console.error)
}, 3*1000)