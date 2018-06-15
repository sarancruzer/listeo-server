var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var CitySchema = new mongoose.Schema({
    name: String,
    status :{type : Number, default :1} 
},
{
    timestamps: true
  })

CitySchema.plugin(mongoosePaginate)
const City = mongoose.model('City', CitySchema)

module.exports = City;