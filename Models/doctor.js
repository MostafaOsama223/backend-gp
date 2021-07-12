'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static createDoctor( doctor ){    
      this.create({
          name  : doctor.name ,
          email : doctor.email,
          phone : doctor.phone
  
      })   
    }

    static associate({ Patient }) {
      // define association here

      this.hasMany(Patient, {
        foreignKey: 'doctorId',
      })
    }
  };
  Doctor.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Doctor',
    timestamps: false
  });
  return Doctor;
};