const express = require('express');
const { use } = require('.');
let routes = express.Router();

let app = express();

routes.get('/',(req,res)=>{
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

routes.get('/admin',(req,res)=>{

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.json({
        users:{
            admin:'cao',
                email:'na@gmail.com',
            id:'exatamente'
        }
    })
});

module.exports = routes;