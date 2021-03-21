const express = require('express');
const { render } = require('pug');
const app = express();
const port = 3000;
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public'));


app.set('view engine', 'pug');


app.get('/', (req, res) => {
  res.send('Hello World!');
})



app.get('/data', (req, res) => {
    const { Number } = req.query

    if(Number == null){
        res.send('Lack of Parameter');

    }else if(isNaN(Number)){
        res.send('Wrong Parameter');
        
    }else{
        
        let add = ''
        let answer = 0;
        for(let i=1; i<= Number; i++){
            add += ""+i+"";
            answer += i;
            if(Number != i){
                add += ' + ';
            }

        }
        res.send(add);
        console.log(Number);
    }

    
});


app.get('/myName', (req, res) => {
    const cookiename = req.cookies.username
    
    if(cookiename){
        res.send('yor name is: '+cookiename);
    }else{
        res.redirect('/trackName');
    }
    
    
});

app.get('/trackName', (req, res) => {
    const cookiename = req.cookies.username
    if(cookiename){
        res.redirect('/myName');
    }
    res.render('index');

});


app.post('/trackName', (req, res) => {
    
    res.cookie('username', req.body.username);
    res.redirect('/myName');
});


app.listen(3000, () => {
  console.log("ready");
});

