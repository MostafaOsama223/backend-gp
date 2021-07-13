const { DataTypes } = require('sequelize');
const sequelize = require("../Utils/database");
const { Doctor } = require('./doctor');
const { Injury } = require('./injury');

function define(sequelize){
    const Patient = sequelize.define('Patient', {

        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

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
        freezeTableName: true,
        timestamps: false
    });

    Doctor.then(Doctor =>
        Patient.belongsTo(Doctor,{
            foreignKey:"doctorId",allowNull:false
        })
    );

    Injury.then(Injury =>
        Patient.belongsToMany(Injury,{
            through:"PatientInjury",
            timestamps: false
        })
    );

    return Patient;
}


module.exports = {
    Patient: sequelize.then(define)
}
