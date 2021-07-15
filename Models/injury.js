'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Injury extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

     static async createInjury( injury ){
      const newInjury = await this.create({
        name : injury.name,
      })
      return newInjury
    }
    static associate({ PatientInjury, Game, Patient }) {
      // define association here

      this.belongsToMany(Game, { //Done
        through: "GameInjury",
        timestamps: false
      })

      this.belongsToMany(Patient, { //DONE
        through: PatientInjury
      })
    }

    static async get(injuryId){
      const injury = await this.findByPk(injuryId);
      return injury
    }

    // static async create( injuryName ){
    //   const injury = await this.create({
    //     name : injuryName, 
    //   });
    //   return injury
    // }
  };
  Injury.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Injury',
    timestamps: false
  });
  return Injury;
};
