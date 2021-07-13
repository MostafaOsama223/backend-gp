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
    static async createDoctor( doctor ){    
      await this.create({
          name  : doctor.name ,
          email : doctor.email,
          phone : doctor.phone
  
      })   
    }
    static async  getAllDoctors(){
      return await this.findAll();
  }
    static async  getDoctor(doctorId){
      return await this.findByPk(doctorId);
  }
    static async deleteDoctor(id){
      await this.destroy({
          where: { id: id }
      })
  }
    static async updateDoctor( dr ){
      const prameters ={};
      Object.keys(dr).forEach(key => {
          if(dr[key]!=='' && dr[key] !== null ){
              prameters[key] =dr[key];
          }
      }) 
  
      await this.update(
          prameters
          ,
          { where: { id: dr.id } }
        )
  }
    static associate({ Patient }) {
      this.hasMany(Patient, {
        foreignKey: 'doctorId',
      })
    }
}
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
      },
      
    }, {
      freezeTableName: false,
      timestamps: false,
      sequelize
    });

return Doctor ;    
};
