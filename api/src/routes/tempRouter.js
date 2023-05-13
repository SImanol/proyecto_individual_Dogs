tempRouter = require('express').Router()
const getTemperamentsOfApiData = require('../controllers/tempOfDogs')


tempRouter.get('/', getTemperamentsOfApiData )

module.exports = tempRouter