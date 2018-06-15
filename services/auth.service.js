var User = require('../models/users.model')
var bcrypt = require('bcryptjs');

_this = this

exports.authenticate = async function (email, password) {
    try {
        var user = await User.findOne({email: email});
        return user;
    } catch (e) {
        throw Error('Error while Paginating lists')
    }
}

exports.create = async function (params) {
    console.log("params ");
    console.log(params);

    var newRecord = new User({
        firstname: params.firstname,
        lastname: params.lastname,
        email: params.email,
        password: bcrypt.hashSync(params.password, 10),
        hash: params.password,
        mobile: params.mobile
    })


    console.log(newRecord);

    // add hashed password to user object
   // newRecord.hash = bcrypt.hashSync(newRecord.password, 10);
    
    console.log(newRecord);


    try {
        var savedRecord = await newRecord.save();

        return savedRecord;
    } catch (e) {

        throw Error("Error while Creating User")
    }
}