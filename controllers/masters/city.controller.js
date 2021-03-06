var _service = require('../../services/masters/city.service')

_this = this

exports.get = async function (req, res, next) {
    console.log('users get');
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var lists = await _service.get({}, page, limit)
        return res.status(200).json({
            status: 200,
            success: true,
            data: lists,
            message: "Succesfully Recieved"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: e.message
        });
    }
}

exports.create = async function (req, res, next) {
    try {
        var isExists = await _service.isExists(req.body.name);
        if(isExists){
            return res.status(201).json({
                status: 201,
                success: true,
                message: "The record "+ req.body.name +" already exists"
            })
        }
    } catch (e) {
        throw Error('Error while Paginating lists')
    }
    
    try {
        var createdRecord = await _service.create(req.body)
        return res.status(201).json({
            status: 201,
            success: true,
            data: createdRecord,
            message: "Succesfully Created "
        })
    } catch (e) {


        return res.status(400).json({
            status: 400,
            success: false,
            message: "Creation was Unsuccesfull"
        })
    }
}

exports.update = async function (req, res, next) {


    if (!req.body._id) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "Id must be present"
        })
    }

    var id = req.body._id;

    console.log(req.body)   

    try {
        var updatedRecord = await _service.update(req.body)
        return res.status(200).json({
            status: 200,
            success: true,
            data: updatedRecord,
            message: "Succesfully Updated Record"
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: e.message
        })
    }
}

exports.remove = async function (req, res, next) {

    var id = req.params.id;
    console.log(id);
    try {
        var deleted = await _service.delete(id)
        console.log(deleted);
        return res.status(204).json({
            status: 204,
            success: true,
            data: deleted,
            message: "Succesfully record Deleted"
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: e.message
        })
    }

}