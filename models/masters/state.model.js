var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var StateSchema = new mongoose.Schema({
    name: String,
    status :{type : Number, default :1} 
},
{
    timestamps: true
  })

StateSchema.plugin(mongoosePaginate)
const State = mongoose.model('State', StateSchema)

module.exports = State;