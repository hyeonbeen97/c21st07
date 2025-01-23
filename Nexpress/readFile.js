const fs = require('fs')
fs.writeFile('./member.txt', '회원정보', (err) => {
    if (err) {
        throw err;
    }
    fs.readFile('./member.txt', (err, data) => {
        if (err) {
            throw err
        }
        console.log(data.toString())
    })

})
