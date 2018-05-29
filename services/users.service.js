// Gettign the Newly created Mongoose Model we just created 
var User = require('../models/users.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the To do List
exports.get = async function(query, page, limit){

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var lists = await User.paginate(query, options)
        
        // Return the todod list that was retured by the mongoose promise
        return lists;

    } catch (e) {

        // return a Error message describing the reason 
        throw Error('Error while Paginating lists')
    }
}

exports.create = async function(params){
    console.log("params ");
    console.log(params);
    
    // Creating a new Mongoose Object by using the new keyword
    var newUser = new User({
        first_name: params.first_name,
        last_name: params.last_name,
        email: params.email,
        mobile: params.email,
        password: params.password,
        date: new Date(),
        status: params.status
    })

    try{
        // Saving the Todo 
        var savedUser = await newUser.save()

        return savedUser;
    }catch(e){
      
        // return a Error message describing the reason     
        throw Error("Error while Creating User")
    }
}

exports.update = async function(params){
    var id = params.id

    try{
        //Find the old Todo Object by the Id
    
        var oldUser = await User.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the User")
    }

    // If no old Todo Object exists return false
    if(!oldUser){
        return false;
    }

    console.log(oldUser)

    //Edit the Todo Object
    oldUser.title = todo.title
    oldUser.description = todo.description
    oldUser.status = todo.status


    console.log(oldUser)

    try{
        var savedUser = await oldUser.save()
        return savedUser;
    }catch(e){
        throw Error("And Error occured while updating the User");
    }
}

exports.delete = async function(id){
    
    // Delete the Todo
    try{
        var deleted = await User.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Record Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Record")
    }
}