 const axios = require('axios')

const { Dogs, Op } = require('../db');

const getDogByName = async (req, res) => {
  const { name } = req.query;

  try {
    const dbDogs = await Dogs.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    if (dbDogs.length === 0) {
      const response = await axios.get(`${process.env.API_URL}`);
      const apiDogs = await response.data
      const filteredDogs = apiDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
      if (filteredDogs === 0) {
        return res.status(404).json({ message: 'No se encontraron razas de perros.' });
      }

      return res.status(200).json({ dogs: filteredDogs});
    }

    return res.status(200).json({ dogs: dbDogs});
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
module.exports = getDogByName