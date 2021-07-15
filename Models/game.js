'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Level, Injury, Patient }) {
      // define association here

      this.hasMany(Level, { //DONE
        foreignKey: {
          name: 'gameId',
          allowNull: false
        }
      })

      this.belongsToMany(Injury, { //Done
        through: "GameInjury",
        timestamps: false
      })

      this.belongsToMany(Patient, { //Done
        through: "GamePatient",
        timestamps: false
      })
    }
  };
  Game.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
    timestamps: false,
  });
  return Game;
};