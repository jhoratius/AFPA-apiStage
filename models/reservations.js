'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.utilisateurs.belongsToMany(voitures, {
        through:reservations
      });
      models.voitures.belongsToMany(utilisateurs, {
        through:reservations
      });
    }
  };
  reservations.init({
    reservation: DataTypes.INTEGER,
    voiture: DataTypes.INTEGER,
    utilisateur: DataTypes.INTEGER,
    dateDepart: DataTypes.DATE,
    dateRetour: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    adresse: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reservations',
  });
  return reservations;
};