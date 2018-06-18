var Model = require('../models/listing.model')
var ListingAmenities = require('../models/listing-amenities.model')

_this = this

exports.get = async function(query, page, limit){

    var options = {
        page,
        limit
    }
    
    try {
        // var lists = await Model.paginate(query, options)
        var lists =  Model.find({}).populate('city_id').populate('state_id').skip(page-1).limit(limit).sort({'_id': -1}).exec()
               
        console.log(lists);

        return lists;

    } catch (e) {

        throw Error('Error while Paginating lists')
    }
}

exports.create = async function(params){
    console.log("params ");
    console.log(params);

    

    

    // asyncForEach(params.amenities, async (value) => {
    //     //await waitFor(50)
    //     console.log(value)
    //   })
    
    var newRecord = new Model({
        business_name: params.business_name,
        category: params.category,
        keywords: params.keywords,
        address: params.address,

        city_id: params.city_id,
        state_id: params.state_id,
        country: params.country,
        zipcode: params.zipcode,

        latitude: params.latitude,
        longitude: params.longitude,

        description: params.description,
        phone: params.phone,
        website: params.website,
        email: params.email,

        facebook_link: params.facebook_link,
        twitter_link: params.twitter_link,
        googleplus_link: params.googleplus_link,
        website: params.website
    })


    try{
        var savedRecord = await newRecord.save()


        params.amenities.forEach((product, index) => {
            console.log(product);

            var amenityRecord = new ListingAmenities({
                listing_id: product.listing_id,
                amenities: product.amenities
            });
            var amenitySavedRecord = await amenityRecord.save()
        });

        return savedRecord;

    }catch(e){
      
        throw Error("Error while Creating User")
    }
}

exports.update = async function(params){
    var id = params.id

    try{
      
        var oldRecord = await Model.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the User")
    }

    if(!oldRecord){
        return false;
    }

    console.log(oldRecord)

    oldRecord.title = todo.title
    oldRecord.description = todo.description
    oldRecord.status = todo.status


    console.log(oldRecord)

    try{
        var savedRecord = await oldRecord.save()
        return savedRecord;
    }catch(e){
        throw Error("And Error occured while updating the User");
    }
}

exports.delete = async function(id){
    
    try{
        var deleted = await Model.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Record Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Record")
    }
}