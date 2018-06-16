var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    user_type: String,
    last_login: {
        type: Date,
        default: Date.now
    },
    status :{type : Number, default :1},
    user_detail: Array,

},
{
    timestamps: true
  })




UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;