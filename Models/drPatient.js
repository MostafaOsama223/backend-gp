const { DataTypes } = require('sequelize');
const sequelize = require("../Utils/database")

const DrPatient = sequelize.define('DrPatient', {

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
        allowNull: false,
    },

}, {
    freezeTableName: true,
    timestamps: false,
});
module.exports = DrPatient;