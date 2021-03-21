const express = require('express');
const { render } = require('pug')
const mysql = require('mysql');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'sys'
});

db.connect();