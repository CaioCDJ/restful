const{body, validationResult} = require('express-validator')

// like mongo
const { log } = require('console');
let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {
    
    let route =  app.route('/users');

    route.get((req,res)=>{

        db.find({}).sort({name:1}).exec((err,users)=>{
            if(err){
                app.utils.error.send(err,req,res);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-type', 'text/html');
                res.json({
                    users
                })
            }
        });
        // drop database
        // db.remove({}, { multi: true }, function (err, numRemoved) {});
    });
    
    route.post(body('email').isEmail,(req,res)=>{
                        
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array()})
            }

        db.insert(req.body,(err,user)=>{
            if(err){
                app.utils.error.send(err,req,res);
            } else {
                res.status(200).json(user);
            }
        });
    });

    let routeID =app.route('/users/:id');  

    routeID.get((req,res)=>{
        
        db.findOne({_id:req.params.id}).exec((err,user)=>{
        
            if(err){
                app.utils.error.send(err,req,res);
            } else { 
                res.status(200).json(user);
            }
        });
    });
    
    routeID.put(body('name').isEmpty(),
        body('email').isEmail(),
        body('password').isEmpty(),
        (req,res)=>{
        
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }


        db.update({_id:req.params.id},req.body,err =>{
        
            if(err){
                app.utils.error.send(err,req,res);
            } else { 
                res.status(200).json(Object.assign(req.body,req.params));
            }
        });
    });
    
    routeID.delete((req,res)=>{
        
        db.remove({ _id:req.params.id },{},err =>{
        
            if(err){
                app.utils.error.send(err,req,res);
            } else { 
                res.status(200).json(req.params);
            }
        });
    });
};