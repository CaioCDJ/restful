const { body } = require("express-validator")

module.exports = {
    user:()=>{
        return[
            body('user'),isEmpty(),
            body('name').isEmpty(),
            body('email').isEmail(),
            body('password').isEmpty()
        ];
    }
}