var _service = require('../services/auth.service')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('config.json');



_this = this

exports.authenticate = async function (req, res, next) {
    // console.log('authenticate');
    // console.log(req.body);    
   try{
       
        var user = await _service.authenticate(req.body.email,req.body.password);
         console.log(user);

        if(!user){
            return res.status(400).json({
                status: 400,
                success: false,
                message: "Authentication Failed. User not Found"
            });
        }else{
                var validPassword = bcrypt.compareSync(req.body.password, user.password)
                
                if(!validPassword){                    
                    return res.status(400).json({
                        status: 400,
                        success: false,
                        message: "Authentication failed. Wrong Password "
                    })

                }else {
                    //var token = jwt.sign({'user':user}, config.secret);
                    // var token = jwt.sign({'user':user}, config.secret, function(){
                    //     expiresInMinutes:1440
                    // });
                    var token = jwt.sign({'user': user}, config.secret, {
                         expiresIn: 43200 // expires in 12 hours
                         });

                    return res.status(201).json({
                        status: 201,
                        success: true,
                        token: token,                        
                        message: "Authentication Successfull"
                    })                   
                }            
        }
    }catch(e){
        return res.status(400).json({
            status: 400,
            success: false,
            message: e.message
        });

    }

}

exports.register = async function (req, res, next) {

    try {
        var createdRecord = await _service.create(req.body)
        return res.status(201).json({
            status: 201,
            data: createdRecord,
            success: true,
            message: "Succesfully Created "
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "Creation was Unsuccesfull"
        })
    }
}