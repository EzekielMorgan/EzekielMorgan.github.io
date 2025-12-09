class Database {
    /**
     * 
     * @param {string} URL 
     */
    constructor(DbURL) {
        this.#url = DbURL
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
    #SendRequest(Type, Path, Value=null) {
        return new Promise((resolve, reject) => {
            fetch({
                method: Type,
                "host": this.#url,
                "path": `/${Path}`,
            }).then(response => {
                if (response.ok) {
                    resolve(response.json())
                } else {
                    reject(`Database request failed with status ${response.status}`)
                }
            }).catch(error => {
                reject(`Database request failed with error: ${error}`)
            })
        })
    }
}

const TestDB = new Database("https://ezekielmorgan-github-io-default-rtdb.firebaseio.com")

window.addEventListener("load", async () => {
    const DatabaseTestElement = document.getElementById("DatabaseTest")
    const Value = await TestDB.GetValue("testing")
    DatabaseTestElement.innerText = Value
})