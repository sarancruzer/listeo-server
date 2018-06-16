var Model = require('../models/listing.model')

_this = this

exports.get = async function(query, page, limit){

    var options = {
        page,
        limit
    }
    
    try {
        var lists = await Model.paginate(query, options)
               
        console.log(lists);

        return lists;

    } catch (e) {

        throw Error('Error while Paginating lists')
    }
}

exports.create = async function(params){
    console.log("params ");
    console.log(params);
    
    var newRecord = new User({
        first_name: params.first_name,
        last_name: params.last_name,
        email: params.email,
        mobile: params.email,
        password: params.password,
        date: new Date(),
        status: params.status
    })

    try{
        var savedRecord = await newRecord.save()

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