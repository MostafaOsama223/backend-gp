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
    static associate({ Game , Progress}) {
      // define association here

      this.belongsTo(Game, { //DONE
        foreignKey: {
          name: "gameId",
          allowNull: false
        }
      })
      this.hasMany(Progress,{ //DONE
        foreignKey:{
          name:"levelId",
          allowNull:false
        }
      })
    }
  };
  Level.init({
    maxScore: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Level',
    timestamps: false,
    underscored: false,
  });
  return Level;
};