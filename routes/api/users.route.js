var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var UserController = require('../../controllers/users.controller');


// Map each API to the Controller FUnctions

router.get('/', UserController.get)

router.post('/', UserController.create)

router.put('/', UserController.update)

router.delete('/:id',UserController.remove)


// Export the Router

module.exports = router;