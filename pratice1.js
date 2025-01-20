class AnyService {
    constructor() {
        this.id = this.id;
        this.eService = require("express");
        this.webService = null
        this.bodyParser = require("body-parser")
    }
    init() {
        this.webService = this.eService()
        this.webService.use(this.bodyParser.urlencoded({ extended: false }))
        this.webService.use(this.eService.static("assets"))
    }
    routes() {
        this.webService.get("/", (req, res) => {
            console.log('${req,query.select}')
        })

        this.webService.post("login", (req, res) => {
            console.log(`${req.body.id} : ${req.body.pw}`)
        })

        this.webService.get("/images", (req, res) => {
            res.send(`<img src="1.jpg">`)
        })
        this.webService.get("/join", (req, res) => {
            let htmlString = '';
            for (let i = 0; i < 5; i++) {
                htmlString += `<img src="myImages${i}">`
            }
            res.send(htmlString)
        })
        this.webService.listen(2000, () => {
            console.log("ㅗ")
        })
    }
    startService() {
        this.init()
        this.routes()
    }

}
const myApp = new AnyService("myApp")
myApp.startService()

