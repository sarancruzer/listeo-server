var express = require('express')

var router = express.Router()

var CategoryController = require('../../controllers/masters/category.controller');
var CityController = require('../../controllers/masters/city.controller');
var StateController = require('../../controllers/masters/state.controller');

router.get('/category', CategoryController.get)
router.post('/category', CategoryController.create)
router.put('/category', CategoryController.update)
router.delete('/category:id',CategoryController.remove)

router.get('/city', CityController.get)
router.post('/city', CityController.create)
router.put('/city', CityController.update)
router.delete('/city:id',CityController.remove)

router.get('/city', StateController.get)
router.post('/city', StateController.create)
router.put('/city', StateController.update)
router.delete('/city:id',StateController.remove)



module.exports = router;