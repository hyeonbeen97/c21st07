const routeCreateUser = (req, res) => {
    // const fs = require("fs")
    const path = require("path")
    const fileIO = require("./fileIO")
    let user = require("./config/user")
    let fileConf = require("./config/fileconf")
    user.id = req.body.userId;
    user.pw = req.body.userPw;
    fileConf.fileMode = "w"
    fileConf.filePath = path.join(__dirname, "./jsons/userList.json")
    fileConf.fileData = JSON.stringify(user)
    fileIO(fileConf)
    res.redirect("/login")   // 페이지 넘어가게 redirect
}

module.exports = routeCreateUser