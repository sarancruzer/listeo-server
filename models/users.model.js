var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    mobile: String,
    password: String,
    hash:String,
    status :{type : Number, default :1} 
},
{
    timestamps: true
  })

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;