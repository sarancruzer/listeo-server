// Accessing the Service that we just created

var _service = require('../services/users.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the To do List

exports.get = async function(req, res, next){

    console.log('users get');

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var todos = await _service.get({}, page, limit)
        
        // Return the todos list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: todos, message: "Succesfully Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.create = async function(req, res, next){

    // Req.Body contains the form submit values.

    var todo = {title: req.body.first,
        description: req.body.description,
        status: req.body.status
    }

    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var createdTodo = await _service.create(req.body)
        return res.status(201).json({status: 201, data: createdTodo, message: "Succesfully Created "})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Creation was Unsuccesfull"})
    }
}

exports.update = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var todo = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    }

    try{
        var updatedTodo = await _service.update(todo)
        return res.status(200).json({status: 200, data: updatedTodo, message: "Succesfully Updated Tod"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.remove = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await _service.delete(id)
        return res.status(204).json({status:204, message: "Succesfully Todo Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}