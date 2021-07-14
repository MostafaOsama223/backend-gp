'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientInjury extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({}) {
      
    }
  };
  PatientInjury.init({
  }, {
    sequelize,
    modelName: 'PatientInjury',
    timestamps: false
  });
  return PatientInjury;
};