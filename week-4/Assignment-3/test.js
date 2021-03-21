const express = require('express');
const { render } = require('pug')
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');


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