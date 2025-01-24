//31일에 만나요??????????
class LoginApp {
    constructor(id) {
        this.id = id
    }
    run() { }
}
const loginApp = new LoginApp("loginApp")
loginApp.run()

const config = require("./config/config")
const bodyParser = require("body-parser");
const loginApp = createExp('loginApp')

loginApp.use(bodyParser.urlencoded({ extended: false }));

const createExp = require("./expressObj")
const routeHome = require("./routeHome")
const routeJoin = require("./routeJoin")
const routeCreateUser = require("./routeCreateUser")
const routeLogin = require("./routeLogin")


loginApp.route("/").get((req, res) => { routeHome(req, res) })
loginApp.route("/join").get((req, res) => { routeJoin(req, res) })
loginApp.route("/createUser").post((req, res) => { routeCreateUser(req, res); });
loginApp.route("/login").get((req, res) => { routeLogin(req, res) })


loginApp.listen(config.port, config.hostname, () => {
    console.log(`http://localhost:${config.port}`);
});