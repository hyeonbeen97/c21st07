const express = require('express');
const router = express.Router();
const fs = require('fs');

// POST 요청 처리
router.post('./', (req, res) => {
    const userInfo = [
        { id: req.body.userId },
        { pw: req.body.userPw },
    ];

    // 파일에 데이터 저장
    fs.writeFile('./userinfo.json', JSON.stringify(userInfo), err => {

        console.log('회원정보 저장 완료:', userInfo);

        // 저장된 데이터 읽기
        fs.readFile('./userinfo.json', (err, data) => {

            console.log('저장된 데이터:', data.toString());
            res.send('회원정보 저장 및 확인 완료');
        });
    });
});

// GET 요청 처리
router.get('/', (req, res) => {
    fs.readFile('./userinfo.json', (err, data) => {
        res.json(JSON.parse(data));
    });
});

module.exports = router;
