const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');


//db
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'assignment'
});

db.connect((err) => {    
    if(err){
        throw err;
    }
});




//create db
app.get('/creatdb', (req, res)=>{
    let sql = 'CREATE DATABASE assignment';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        app.send('db is create...');
    });
});


// //create table
// app.get('/createpostable', () => {
//     let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))'
//     db.query(sql, (err, result) =>{
//         if(err) throw err;
//         console.log(result);
        
//     });
    
// });

let me = 'test@gmail.com';

// //add a user
app.get('/adduser1', (req, res)=>{
    let post = {email: 'test@gmail.com', password: '123'};
    let sql = 'INSERT INTO user SET ?';
    let query = db.query(sql, post, (err, result) =>{
        if(err) throw err;
        console.log(result);
        
    });
});


//select users
app.get('/selectusers', (req, res)=>{
    let sql = 'SELECT * FROM user';
    let b = '';
    let query = db.query(sql, (err, results) =>{
        if(err) throw err;
        b = JSON.parse(JSON.stringify(results));
        console.log(b.length);
        console.log(results);
    });
});

var a = '';
var c = '';

// req.params.id
//select user
app.get('/getuser/:id', (req, res) =>{
    let sql = `SELECT * FROM user WHERE email LIKE '${req.params.id}%'`;
    let query = db.query(sql, (err, result) =>{
        if(err) throw err;
        a = JSON.stringify(result);
        let b = JSON.parse(a);
        console.log(b[0].id);
    });
    
});

//抓取user資料
 function getl(){
    let sql = 'SELECT * FROM user';
    let query = db.query(sql, (err, results) =>{
        if(err) throw err;
        c = JSON.parse(JSON.stringify(results));
    });
}


//listen 300
app.listen(3000, ()=>{
    console.log('ready 3000');
});


//進入home-page
app.get('/home', (req, res) =>{
    res.render('index');
});

//收到home的 當有人按下login按鈕。
app.post('/home', (req, res) =>{

    //抓取所有user的資料
    getl();

    for(let x = 1; x<c.length; x++){
        //判斷如果email與密碼輸入沒有問題
        if(req.body.email == c[x].email && req.body.password == c[x].password){
            //進入登入畫面
            res.render('welcome');
            return;
        }
    }

    //如果email或是密碼輸入錯誤，則會直接跳轉到 失敗頁面
    res.render('fail');
    
    
});

//進入註冊頁面
app.get('/sign', (req, res) =>{
    //跳轉至註冊頁面
    res.render('signup');
});

app.post('/sign', (req, res) =>{

    //抓取所有user資料
    getl();
    for(let x = 1; x<c.length; x++){

        //如果email以及密碼已被資料庫儲存過
        if(req.body.email == c[x].email && req.body.password == c[x].password){
            //跳轉失敗介面
            res.render('fail');
            return;
    }}

    //開始新增帳號
    let post = {email: req.body.email, password: req.body.password};
    let sql = 'INSERT INTO user SET ?';
    let query = db.query(sql, post, (err, result) =>{
        if(err) throw err;
        console.log(result);
    });
    //跳轉回登入頁面
    res.render('index');

});