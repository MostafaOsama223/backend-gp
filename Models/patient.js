'use strict';
const {
  Model
} = require('sequelize');

const Injury = require('./injury')
console.log(Injury);
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

     static async createPatient(patientI){
      let injury_ID = await Injury.findOne({ where: { name: "wawa" } }).id;
          console.log("The type of injury is :", injury_ID);
          const patient = await this.create({
              name    : patientI.name ,
              email   : patientI.email,
              phone   : patientI.phone,
              doctorId: patientI.doctorId
          })
      
      let patient_ID = await patient.id
      console.log("The id of patient is : ", patient_ID);
  
      sequelize.models.PatientInjury.create({
          InjuryId  : injury_ID ,
          PatientId: patient_ID 
      })
  }

  static async getPatient(doctorId){
    return await Patient.findByPk(doctorId);
  }
  
  static async updatePatient( pt ){
    const prameters ={};
    Object.keys(pt).forEach(key => {
        if(pt[key]!=''){
            prameters[key] =pt[key];
        }
    }) 

    await Patient.update(
        prameters
        ,
        { where: { id: pt.id } }
      )
  }
  static async deletePatient(id){
    await Patient.destroy({
        where: { id: id }
       })
  }
  static async  getPatient(doctorId){
    return await Patient.findByPk(doctorId);
  }
  // async getpatientId(phone){
  //     let patient =  await this.findOne({ where: { phone: phone } });
  //     return patient.id
  // }

  // async getInjuryId(injury){
  //     let  injuryId = await Injury.findOne({ where: { name: injury } });
  //     return injuryId.id
  // }

    static associate({ Game, Doctor, Injury }) {
      // define association here

      this.belongsToMany(Game, {
        through: "GamePatient",
        timestamps: false
      })

      this.belongsTo(Doctor, {
        foreignKey:"doctorId"
      })
      
      // this.belongsToMany(Injury,{
      //   through:"PatientInjury",
      //   timestamps: false
      // })
    }
  };
  Patient.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
}, {
    freezeTableName: true,
    sequelize,
    modelName: 'Patient',
    timestamps: false,
    underscored: true
});

  return Patient;
};

