var Model = require('../../models/masters/category.model')


_this = this

exports.get = async function(query, page, limit){

    var options = {
        page,
        limit
    }
    try {
        var lists = await Model.paginate(query, options)

        return lists;

    } catch (e) {

        throw Error('Error while Paginating lists')
    }
}

exports.create = async function(params){
    console.log("params ");
    console.log(params);
    var newRecord = new Model(params)
    console.log(newRecord);    
    try{
        var savedRecord = await newRecord.save()

        return savedRecord;
    }catch(e){
      
        throw Error("Error while Creating User")
    }
}

exports.update = async function(params){
    var id = params._id
    try{
      
        var oldRecord = await Model.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the record")
    }

    if(!oldRecord){
        return false;
    }

    console.log(oldRecord)

    oldRecord.name = params.name
   
    console.log(oldRecord)

    try{
        var savedRecord = await oldRecord.save()
        return savedRecord;
    }catch(e){
        throw Error("And Error occured while updating the record");
    }
}

exports.delete = async function(id){
    
    try{
        var deleted = await Model.remove({_id: id})
        if(deleted.n === 0){
            throw Error("Record Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Record")
    }
}


exports.isExists = async function(name){
    try{
        var record = await Model.findOne({name:name});
        return record;
    }catch(e){
        throw Error("Error while checking")
    }
}
