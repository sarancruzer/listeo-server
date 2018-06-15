var express = require('express')

var router = express.Router()

var CategoryController = require('../../controllers/masters/category.controller');
var CityController = require('../../controllers/masters/city.controller');

router.get('/category', CategoryController.get)
router.post('/category', CategoryController.create)
router.put('/category', CategoryController.update)
router.delete('/category:id',CategoryController.remove)

router.get('/city', CityController.get)
router.post('/city', CityController.create)
router.put('/city', CityController.update)
router.delete('/city:id',CityController.remove)



module.exports = router;