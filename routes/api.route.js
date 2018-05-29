var express = require('express')

var router = express.Router()
var todos = require('./api/todos.route')
var users = require('./api/users.route')


router.use('/users', users)

router.use('/todos', todos);

module.exports = router;