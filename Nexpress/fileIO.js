const fileIO = ({ fileMode, filePath, fileData }) => {
    const fileRead = (filePath) => { }
    const fileWrite = (filePath, fileData) => {
        const fs = require("fs")
        fs.writeFile(filePath, fileData, (err) => {
            if (err) throw err;
        })
    }
    switch (fileMode) {
        case 'w':
            fileWrite(filePath, fileData)
            break;
        case 'r':
            fileRead(filePath)
            break;
    }

}
module.exports = fileIO