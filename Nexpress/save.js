const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('./', (req, res) => {
    const userInfo = [
        { id: req.body.userId },
        { pw: req.body.userPw },
    ];

    fs.writeFile('./userinfo.json', JSON.stringify(userInfo), err => {

        console.log('회원정보 저장 완료:', userInfo);

        fs.readFile('./userinfo.json', (err, data) => {

            console.log('저장된 데이터:', data.toString());
            res.send('회원정보 저장 및 확인 완료');
        });
    });
});

router.get('/', (req, res) => {
    fs.readFile('./userinfo.json', (err, data) => {
        res.json(JSON.parse(data));
    });
});

module.exports = router;
