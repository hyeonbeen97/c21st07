const express = require('express');
const app = express();
const path = require('path');

// 라우터 가져오기
const saveRouter = require('./save');
const userRouter = require('./user');

// 정적 HTML 파일 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/join.html'));
});

// 라우터 등록
app.use('/save', saveRouter);
app.use('/user', userRouter);

// 포트 연결
app.listen(3000, () => {
    console.log('http://localhost:3000');
});