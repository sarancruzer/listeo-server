var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    user_type: String,
    
    mobile:String,
    avatar: String,
    twitter_link:String,
    facebook_link:String,
    googleplus_link:String,

    last_login: {
        type: Date,
        default: Date.now
    },
    status :{type : Number, default :1}
},
{
    timestamps: true
  })




UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;