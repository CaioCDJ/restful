const http = require('http');

let server = http.createServer((req,res)=>{
    console.log('url: ', req.url);

    console.log('method: ', req.method);

    switch(req.url){
        case '/':
        
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end('<h1>Ola</h1>')

        break;

        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end(JSON.stringify({
                users:{
                    name:'caio',
                    email:'ehhe',
                    id:'exatamente'
                }
            }))
        
        break;

    }

});

server.listen(3000,'127.0.0.1',()=>{
    console.log('Servidor rodando');
})