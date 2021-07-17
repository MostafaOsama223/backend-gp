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
    static associate({Patient , Level}) {
      // define association here
      this.belongsTo(Patient,{
        foreignKey:{
          name:"patientId",
          allowNull:false
        }
      })
      this.belongsTo(Level,{
        foreignKey:{
          name:"levelId",
          allowNull:false
        }
      })
    }
    static async add(progress){
      console.log(progress);
      const progressData = await Progress.create({
        "score" : progress.score,
        "time Spent" : progress.timeSpent,
        "patientId" : progress.patientId,
        "levelId" : progress.levelId
      })
      return progressData ;
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