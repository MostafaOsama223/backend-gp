'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Game }) {
      // define association here

      this.belongsTo(Game, { //DONE
        foreignKey: {
          name: "gameId",
          allowNull: false
        }
      })
    }
  };
  Level.init({
    maxScore: DataTypes.INTEGER,
    difficulty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Level',
    timestamps: false,
    underscored: false,
  });
  return Level;
};