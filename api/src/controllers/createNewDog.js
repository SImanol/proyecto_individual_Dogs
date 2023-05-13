const { Dogs, Temperaments } = require('../db');

const newDog = async (req, res) => {
  const { name, height, weight, life_span, image, temperament } = req.body;

  try {

    if (!Array.isArray(temperament) || temperament.length === 0) {
      return res.status(400).json({ message: 'Los temperamentos deben ser un array no vacío.' });
    }

    const temperamentIds = [];
    for (const temp of temperament) {
      const [temperamentDb] = await Temperaments.findOrCreate({
        where: { name: temp },
      });
      temperamentIds.push(temperamentDb.id);
    }

    const createDog = await Dogs.create({
    image,
     name,
     height,
     weight,
     life_span
 })

    await createDog.addTemperaments(temperamentIds);

    return res.status(201).json({ createDog });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};


module.exports = newDog;