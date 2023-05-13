const axios = require('axios');
const { Dogs, Temperaments } = require('../db')

const apiDogs = async() => {
    const response = await axios.get(`${process.env.API_URL}`);
      const apiDogsDetail = response.data.map((dog) => {
        return {
          id: dog.id,
          image: dog.image.url,
          name: dog.name,
          height: dog.height.metric,
          weight: dog.weight.metric,
          life_span: dog.life_span,
          temperaments: dog.temperament
        }
      })
      return apiDogsDetail 
  }
  

  const getDogsDb = async () => {
    const response = await Dogs.findAll({
      include: {
        model: Temperaments,
        as: 'temperaments',
        attributes:['name'],
        through:{
          attributes:[]
        },
      }
    });
    const dogsWithTemperaments = response.map(dog => ({
      ...dog.dataValues,
      temperament : dog.temperaments.map( temp => temp.name).join(', ')
    }));
    return dogsWithTemperaments
  };

  const getAllDogs = async () => {
    const apiData = await apiDogs();
    const dbData = await getDogsDb();

    const allData = dbData.concat(apiData)
    
    return allData;
  }
  
  module.exports = getAllDogs
