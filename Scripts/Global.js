/*
CONSTANT VARS
*/

const VERSION = "0.2.15";

/*
DEBOUNCE VARS
*/

let Debounces = {
    ThemeButtonBound: false,
    SONARPING: false
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

    footer.innerText = `Version: ${VERSION} | Developed by Ezekiel Morgan\nThis is a WIP, everything is subject to change!`
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
const StartSONARPING = async () => {
    if (Debounces.SONARPING) {
        throw new Error("Attemped to start SONARPING, when it already exists.")
    }

    let ImageElemet = document.createElement(
        "img"
    )
    ImageElemet.id = "SONARPING"
    ImageElemet.style = "position: fixed; width: 100%; height: 100%; z-index: 99999999; top: 0px; left: 0px; display: none;"
    ImageElemet.src = "https://ezekielmorgan.github.io/Images/Misc/SONAR%20PING.jpg"
    document.body.appendChild(ImageElemet)
    Debounces.SONARPING = true

    let current = ""

    document.addEventListener("keypress", (a) => {
        console.log(a)
        current += a.key.toUpperCase()
        console.log(current)

        if ("geolocation" in navigator) {
            if (!(current === "S" | current === "SO" | current === "SON" | current === "SONA" | current === "SONAR")) {
                current = ""
            }
        } else {
            current = ""
        }

        console.log(current)

        if (current === "SONAR") {
            ImageElemet.style = "position: fixed; width: 100%; height: 100%; z-index: 99999999; top: 0px; left: 0px; display: content;"
            let currentPosition = navigator.geolocation.getCurrentPosition((a) => {
                console.log(a.coords.latitude,a.coords.longitude)
                alert(`Inbound Sonar Ping to \n${a.coords.latitude}, ${a.coords.longitude}`)
                ImageElemet.style = "position: fixex; width: 100%; height: 100%; z-index: 99999999; top: 0px; left: 0px; display: none;"
            }, (b) => {
                if (b.PERMISSION_DENIED) {
                    ImageElemet.style = "position: fixed; width: 100%; height: 100%; z-index: 99999999; top: 0px; left: 0px; display: none;"
                    alert("LAAAAAAAAAAME!")
                } else {
                    ImageElemet.style = "position: fixed; width: 100%; height: 100%; z-index: 99999999; top: 0px; left: 0px; display: none;"
                }
            })
            console.log(currentPosition)
            /*setTimeout(() => {
                ImageElemet.style = "position: fixed; width: 100%; height: 100%; z-index: 99999999; top: 0px; left: 0px; display: none;"
            }, 1000);*/
            current = ""
        }
    })
}

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

    StartSONARPING().then(() => {
        console.log("SONAR PING READY")
    }).catch(console.error)
})

setTimeout(() => {
    BindThemeButton().then(() => {
        console.log("ThemeButton Bound")
    }).catch(console.error)

    UpdateFooter().then(() => {
        console.log("Footer Updated")
    }).catch(console.error)

    StartSONARPING().then(() => {
        console.log("SONAR PING READY")
    }).catch(console.error)
}, 3 * 1000)