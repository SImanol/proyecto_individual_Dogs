const dogRouter = require('express').Router();
const getDogById = require('../controllers/getDogsById')
const getDogByName = require('../controllers/getDogByName')
const getAllDogs = require ('../controllers/allDogs')
const newDog = require('../controllers/createNewDog');
const validation = require('../controllers/validation');

dogRouter.get("/", async (req, res) => {
    try {
        const alldogs = await  getAllDogs();
        return res.status(200).json(alldogs)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
})

dogRouter.get("/name", getDogByName)

dogRouter.get("/:idRaza", async (req, res) => {
    const { idRaza } =  req.params;
    try {
        const dogsByid = await getDogById(idRaza)
        return res.status(200).json(dogsByid)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
})


dogRouter.post('/', newDog, validation )

module.exports = dogRouter