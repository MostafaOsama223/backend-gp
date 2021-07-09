const {
    DataTypes
} = require('sequelize');
const sequelize = require("../Utils/database")

const Progress = sequelize.define('Progress', {

    patientId: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Progress;