'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

  static associate({ PatientInjury, Doctor, Injury }) {

    this.belongsToMany(Injury, { //DONE
      through: PatientInjury
    })
    
    this.belongsTo(Doctor, { //DONE
      foreignKey:{
        name:"doctorId",
        allowNull: false,
      },
      
    })
    this.belongsToMany(Game,{ //Done
      through: "GamePatient",
      timestamps: false
    })

  }

  static async add(patientI){
    const patient = await this.create({
      name    : patientI.name ,
      email   : patientI.email,
      phone   : patientI.phone,
      doctorId: patientI.doctorId
    });
    return patient;
  }

  static async get(patientId){
    const patient = await Patient.findByPk(patientId);
    return patient;
  }
  
  static async modify( patient ){
    const prameters = {};
    Object.keys(patient).forEach(key => {
        if(patient[key] != ''){
            prameters[key] =patient[key];
        }
    }) 

    const newPatient = await Patient.update(
        prameters,
        { where: { id: patient.id } })
    return newPatient
  }

  static async delete(patientId){
    const deletedPatient = await Patient.destroy({
      where: { id: patientId }
    })
    return deletedPatient;
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
}, {
    freezeTableName: false,
    sequelize,
    modelName: 'Patient',
    timestamps: false,
    underscored: true
});

  return Patient;
};

