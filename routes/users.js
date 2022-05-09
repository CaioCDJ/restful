
module.exports = (app) => {
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
    app.post('/users',(req,res)=>{
     
        res.json(req.body);
    });
};