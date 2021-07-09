const { DataTypes } = require('sequelize');
const sequelize = require("../Utils/database");
const Doctor = require('./doctor');
const Injury = require('./Injury');

const Patient = sequelize.define('Patient', {

    patientId: {
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

    doctorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    freezeTableName: true,
    timestamps: false
});

Patient.belongsTo(Doctor,{
    foreignKey:"doctorId",allowNull:false
});
/*
Patient.belongsTo(Injury,{
    foreignKey:"injuryId",allowNull:false
});*/
module.exports = Patient;
