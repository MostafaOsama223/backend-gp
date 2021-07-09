const { DataTypes } = require('sequelize');
const sequelize = require("../Utils/database")

const PatientGame = sequelize.define('PatientGame', {

    patientGameId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = PatientGame;