const getAllDogs = require('./allDogs');

const getDogById = async (idRaza) => {
  const allDogs = await getAllDogs();
  const dog = allDogs.find((dog) => dog.id === Number(idRaza) || dog.id === (idRaza));

  if (dog) {
    return { dog };
  } else {
    throw new Error('No se encontró ningún perro con el ID especificado');
  }
};

module.exports = getDogById;
    