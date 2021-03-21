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
app.get('/createpostable', () => {
    let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255) PRIMARY KEY(id))'
    db.query('sql', (err, result) =>{
        if(err) throw err;
        console.log(result);
        
    });
    
});

// //add a user
app.get('/adduser1', (req, res)=>{
    let post = {email: 'test@gmail.com', password: '123'};
    let sql = 'INSERT INTO user SET ?';
    let query = db.query(sql, post, (err, result) =>{
        if(err) throw err;
        console.log(result);
        send('hi')
    });
});


// //select users
app.get('/selectusers', (req, res)=>{
    let sql = 'SELECT * FROM user';
    let query = db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
    });
});


// //select user
app.get('/getuser/:id', (req, res) =>{
    let sql = `SELECT * FROM user WHERE email = ${req.params.id}`;
});




app.listen(3000, ()=>{
    console.log('ready 3000');
});



app.get('/home', (req, res) =>{
    res.render('index');
});

app.post('/home', (req, res) =>{
    console.log(req.body);
    res.render('index')
});