var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ListingAmenitiesSchema = new mongoose.Schema({
    listing_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' }, 
    amenities: String, 

    is_deleted :{type : Number, default :0},
    status :{type : Number, default :1}
},
{
    timestamps: true
  })

  ListingAmenitiesSchema.plugin(mongoosePaginate)
const ListingAmenities = mongoose.model('ListingAmenities', ListingAmenitiesSchema)


module.exports = ListingAmenities;