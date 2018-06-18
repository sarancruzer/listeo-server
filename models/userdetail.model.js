var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var UserDetailsSchema = new mongoose.Schema({
    mobile:String,
    avatar: String,
    twitter_link:String,
    facebook_link:String,
    googleplus_link:String,
    status :{type : Number, default :1},
    user_detail: Array,
},
{
    timestamps: false
})

UserDetailsSchema.plugin(mongoosePaginate)
const UserDetails = mongoose.model('UserDetails', UserDetailsSchema)

module.exports = UserDetails;