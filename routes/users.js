
// like mongo
const { log } = require('console');
let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

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
             
        db.insert(req.body,(err,user)=>{
            if(err){
                console.log(err);
                res.status(400).json({
                    error: err
                });
            } else {
                res.status(200).json(user);
            }
        });
    });
};