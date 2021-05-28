'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voitures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.voitures.hasMany(models.reservations);
    }
  };
  voitures.init({
    voiture: DataTypes.INTEGER,
    marque: DataTypes.STRING,
    immat: DataTypes.STRING,
    carburant: DataTypes.STRING,
    km: DataTypes.INTEGER,
    AM: DataTypes.BOOLEAN,
    fuel: DataTypes.BOOLEAN,
    attachment: DataTypes.STRING,
    pxDD: DataTypes.INTEGER,
    pxLV: DataTypes.INTEGER,
    pxWE: DataTypes.INTEGER,
    pxWK: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'voitures',
  });
  return voitures;
};