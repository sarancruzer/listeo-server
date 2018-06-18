var User = require('../models/users.model')
var UserDetail = require('../models/userdetail.model')
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
        name: params.name,
        email: params.email,
        password: bcrypt.hashSync(params.password, 10),
        user_type: params.user_type,
        mobile: params.mobile,
        avatar: params.avatar,
        twitter_link: params.mobtwitter_linkle,
        facebook_link: params.facebook_link,
        googleplus_link: params.googleplus_link,
    })
   
    console.log(newRecord);
     
    try {
        var savedRecord = await newRecord.save();

               
        return savedRecord;
    } catch (e) {

        throw Error("Error while Creating User")
    }
}