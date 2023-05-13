const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dogs', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true
    },
    height: {
      type: DataTypes.FLOAT
    },
    weight: {
      type: DataTypes.FLOAT
    },
    life_span: {
      type: DataTypes.STRING
    },
    image:{
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  },{
    timestamps: false,
  });
};
