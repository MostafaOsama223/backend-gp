'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Progress.init({
    score: DataTypes.SMALLINT,
    timeSpent: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Progress',
    timestamps: false,
    underscored: true,
  });
  return Progress;
};