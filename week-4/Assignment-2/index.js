const https = require('http');


function ajax(src, callback){ // your code here

  let body = '';
  https.get(src, res =>{
    res.on('data', data =>{
      body += data;
    });

    res.on('end', ()=>{
      callback(body);
    });

});


  
}

function render(data){ // your code here.
  let li = document.createElement('li');
  li.textContent = data;
  document.body.appendChild(li);
  //document.createElement()
  //appendChild()
}




ajax("http://13.113.12.180:4000/api/1.0/remote-w4-data", function(response){
  render(response);
});// you should get product information in JSON format and render data in the page