class Database {
    /**
     * 
     * @param {string} URL 
     */
    constructor(URL) {
        this.#url = URL
    }

    #url

    /**
     * 
     * @param {string} Path 
     */
    async GetValue(Path) {
        return await this.#SendRequest("GET", Path)
    }


    /**
     * 
     * @param {"GET" | "SET"} Type 
     * @param {string} Path
     * @param {null | [Type == "SET" ? any]} Value
     */
    async #SendRequest(Type, Path, Value=null) {
        fetch({
            method: Type,
            url: this.#url + Path
        })
    }
}

const TestDB = new Database("https://ezekielmorgan-github-io-default-rtdb.firebaseio.com/")

window.addEventListener("load", async () => {
    const DatabaseTestElement = document.getElementById("DatabaseTest")
    const Value = await TestDB.GetValue("testing")
    DatabaseTestElement.innerText = Value
})