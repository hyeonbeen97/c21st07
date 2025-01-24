const createExp = (id) => {
    class ExpressObj {
        constructor(id) {
            this.id = id
            this.express = require("express")
        }
        createExp() {
            return this.express()
        }
    }
    const expObj = new ExpressObj(id)
    return expObj.createExp()
}

module.exports = createExp;