var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ListingSchema = new mongoose.Schema({
    business_name: String,
    category: String,
    keywords:String,
    address: String,

    city: String,
    state:String,
    country: String,
    zipcode: String,

    latitude:String,
    longitude: String,

    description: String,
    phone:String,
    website: String,
    email: String,

    facebook_link:String,
    twitter_link:String,
    googleplus_link:String,  

    is_deleted :{type : Number, default :0},
    status :{type : Number, default :1}
},
{
    timestamps: true
  })

ListingSchema.plugin(mongoosePaginate)
const Listing = mongoose.model('Listing', ListingSchema)

module.exports = Listing;