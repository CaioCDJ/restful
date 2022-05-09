const express = require('express');

let app = express();

app.get('/',(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Ola</h1>')

});

app.get('/users',(req,res)=>{
    console.log('url: ', req.url);

    console.log('method: ', req.method);

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.json({
        users:{
            name:'Algo',
                email:'ehhe',
            id:'exatamente'
        }
    })


});

app.listen(3000,'127.0.0.1',()=>{
    console.log('Servidor rodando');
})