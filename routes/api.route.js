var express = require('express')

var router = express.Router()
var users = require('./api/users.route')
var masters = require('./api/masters.route')

var AuthController = require('../controllers/auth.controller');

router.post('/authenticate', AuthController.authenticate)
router.post('/register', AuthController.register)

router.use('/users', users)
router.use('/masters', masters)

module.exports = router;